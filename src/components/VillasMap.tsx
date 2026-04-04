"use client";

import { useEffect, useRef } from "react";
import type { FeatureCollection, Point } from "geojson";
import type { LngLatBounds, StyleSpecification } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

const MAP_PRIMARY = "#21343E";
const MAP_SECONDARY = "#DFD8CF";

const PIN_SVG_PX = 40;
const POPUP_OFFSET_Y_PX = -(PIN_SVG_PX + 14);

const VILLAS_SOURCE_ID = "villas";
const VILLA_PIN_IMAGE_ID = "villa-pin";
const VILLAS_PIN_LAYER_ID = "villas-pins";

interface VillasMapProps {
  onReady?: () => void;
}

function buildOsmStyle(): StyleSpecification {
  return {
    version: 8,
    glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
    sources: {
      osm: {
        type: "raster",
        tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright" rel="noreferrer">OpenStreetMap</a>',
      },
    },
    layers: [
      {
        id: "osm",
        type: "raster",
        source: "osm",
        minzoom: 0,
        maxzoom: 19,
      },
    ],
  };
}

function extendBounds(bounds: LngLatBounds, collection: FeatureCollection) {
  for (const f of collection.features) {
    if (f.geometry.type !== "Point") continue;
    const [lng, lat] = (f.geometry as Point).coordinates;
    bounds.extend([lng, lat]);
  }
}

function getPinSvgMarkup(): string {
  const size = PIN_SVG_PX;
  const strokeWidth = 2;
  const r = 9;

  return `
<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 46s14-13.5 14-26C38 12.3 31.7 6 24 6S10 12.3 10 20c0 12.5 14 26 14 26Z" fill="${MAP_PRIMARY}" stroke="${MAP_SECONDARY}" stroke-width="${strokeWidth}"/>
  <circle cx="24" cy="20" r="${r}" fill="${MAP_SECONDARY}"/>
</svg>
  `.trim();
}

function loadSvgAsImage(svgMarkup: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to load villa pin SVG as image"));
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgMarkup)}`;
  });
}

export function VillasMap({ onReady }: VillasMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let map: import("maplibre-gl").Map | null = null;
    let popup: import("maplibre-gl").Popup | null = null;
    let ro: ResizeObserver | null = null;
    let cancelled = false;

    const interactiveLayers = [VILLAS_PIN_LAYER_ID];

    (async () => {
      const maplibregl = (await import("maplibre-gl")).default;

      const res = await fetch("/data/villas.geojson");
      if (!res.ok || cancelled) return;
      const data = (await res.json()) as FeatureCollection;

      map = new maplibregl.Map({
        container: el,
        style: buildOsmStyle(),
        center: [28.15, 36.3],
        zoom: 9,
      });

      map.addControl(
        new maplibregl.NavigationControl({ showCompass: false }),
        "top-right",
      );

      popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: true,
        focusAfterOpen: false,
        anchor: "bottom",
        offset: [0, POPUP_OFFSET_Y_PX],
        className: "villas-map-popup",
      });

      map.on("load", () => {
        void (async () => {
          if (!map || cancelled) return;

          let pinIconReady = false;
          try {
            const pinImg = await loadSvgAsImage(getPinSvgMarkup());
            if (!map || cancelled) return;
            if (!map.hasImage(VILLA_PIN_IMAGE_ID)) {
              map.addImage(VILLA_PIN_IMAGE_ID, pinImg);
            }
            pinIconReady = true;
          } catch {
            pinIconReady = false;
          }

          map.addSource(VILLAS_SOURCE_ID, {
            type: "geojson",
            data,
          });

          if (pinIconReady) {
            map.addLayer({
              id: VILLAS_PIN_LAYER_ID,
              type: "symbol",
              source: VILLAS_SOURCE_ID,
              layout: {
                "icon-image": VILLA_PIN_IMAGE_ID,
                "icon-size": 1,
                "icon-anchor": "bottom",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
              },
            });
          } else {
            map.addLayer({
              id: VILLAS_PIN_LAYER_ID,
              type: "circle",
              source: VILLAS_SOURCE_ID,
              paint: {
                "circle-color": MAP_PRIMARY,
                "circle-stroke-color": MAP_SECONDARY,
                "circle-stroke-width": 2,
                "circle-radius": 24,
              },
            });
          }

          const bounds = new maplibregl.LngLatBounds();
          extendBounds(bounds, data);
          map.fitBounds(bounds, { padding: 48, maxZoom: 14, duration: 0 });

          function openVillaPopup(lng: number, lat: number, name: string) {
            if (!map || !popup) return;
            const inner = document.createElement("div");
            inner.className = "villas-map-popup-inner";

            const label = document.createElement("div");
            label.className = "villas-map-popup-label";
            label.textContent = name;

            const closeBtn = document.createElement("button");
            closeBtn.type = "button";
            closeBtn.className = "villas-map-popup-close";
            closeBtn.setAttribute("aria-label", "Close");
            closeBtn.textContent = "×";
            closeBtn.addEventListener("click", (e) => {
              e.stopPropagation();
              e.preventDefault();
              popup?.remove();
            });

            inner.append(label, closeBtn);

            popup.setLngLat([lng, lat]).setDOMContent(inner).addTo(map);
          }

          map.on("click", VILLAS_PIN_LAYER_ID, (e) => {
            if (!e.features?.length) return;
            const feature = e.features[0];
            const coords = (feature.geometry as Point).coordinates;
            const [lng, lat] = coords;
            const name = String(feature.properties?.name ?? "Villa");
            openVillaPopup(lng, lat, name);
          });

          for (const layerId of interactiveLayers) {
            map.on("mouseenter", layerId, () => {
              if (map) map.getCanvas().style.cursor = "pointer";
            });
            map.on("mouseleave", layerId, () => {
              if (map) map.getCanvas().style.cursor = "";
            });
          }

          ro = new ResizeObserver(() => {
            map?.resize();
          });
          ro.observe(el);

          onReadyRef.current?.();
        })();
      });
    })();

    return () => {
      cancelled = true;
      ro?.disconnect();
      popup?.remove();
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="villas-map absolute inset-0 h-full w-full [&_.maplibregl-ctrl-attrib]:bg-secondary/90 [&_.maplibregl-ctrl-attrib]:text-[10px] [&_.maplibregl-ctrl-attrib]:text-primary/80"
      aria-label="Interactive map of villa locations in Rhodes"
    />
  );
}
