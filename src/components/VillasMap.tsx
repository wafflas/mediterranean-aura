"use client";

import { useEffect, useRef } from "react";
import type { FeatureCollection, Point } from "geojson";
import type { LngLatBounds, StyleSpecification } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

const MAP_PRIMARY = "#21343E";
const MAP_SECONDARY = "#DFD8CF";

const PIN_TOUCH_PX = 48;
const PIN_SVG_PX = 40;
const POPUP_OFFSET_Y_PX = -(PIN_TOUCH_PX + 6);

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

export function VillasMap({ onReady }: VillasMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let map: import("maplibre-gl").Map | null = null;
    let popup: import("maplibre-gl").Popup | null = null;
    const markers: Array<import("maplibre-gl").Marker> = [];
    let ro: ResizeObserver | null = null;
    let cancelled = false;

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

      map.on("load", () => {
        if (!map || cancelled) return;

        const bounds = new maplibregl.LngLatBounds();
        extendBounds(bounds, data);
        map.fitBounds(bounds, { padding: 48, maxZoom: 12, duration: 0 });

        popup = new maplibregl.Popup({
          closeButton: false,
          closeOnClick: true,
          focusAfterOpen: false,
          anchor: "bottom",
          offset: [0, POPUP_OFFSET_Y_PX],
          className: "villas-map-popup",
        });

        for (const feature of data.features) {
          if (feature.geometry.type !== "Point") continue;
          const [lng, lat] = (feature.geometry as Point).coordinates;
          const name = String(feature.properties?.name ?? "Villa");

          const markerEl = document.createElement("button");
          markerEl.type = "button";
          markerEl.className = "villas-map-pin";
          markerEl.setAttribute("aria-label", name);
          markerEl.innerHTML = getPinSvgMarkup();
          applyPinTouchTargetStyles(markerEl);

          function openVillaPopup() {
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

          let lastTouchEndAt = 0;

          markerEl.addEventListener(
            "pointerdown",
            (e) => {
              e.stopPropagation();
            },
            true,
          );
          markerEl.addEventListener(
            "touchend",
            (e) => {
              e.preventDefault();
              e.stopPropagation();
              lastTouchEndAt = Date.now();
              openVillaPopup();
            },
            { passive: false },
          );
          markerEl.addEventListener("click", (e) => {
            e.stopPropagation();
            if (Date.now() - lastTouchEndAt < 650) return;
            openVillaPopup();
          });

          markerEl.addEventListener("mouseenter", () => {
            if (map) map.getCanvas().style.cursor = "pointer";
          });
          markerEl.addEventListener("mouseleave", () => {
            if (map) map.getCanvas().style.cursor = "";
          });

          const marker = new maplibregl.Marker({
            element: markerEl,
            anchor: "bottom",
          })
            .setLngLat([lng, lat])
            .addTo(map);

          markers.push(marker);
        }

        ro = new ResizeObserver(() => {
          map?.resize();
        });
        ro.observe(el);

        onReadyRef.current?.();
      });
    })();

    return () => {
      cancelled = true;
      ro?.disconnect();
      popup?.remove();
      for (const m of markers) m.remove();
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

function applyPinTouchTargetStyles(el: HTMLButtonElement) {
  el.style.minWidth = `${PIN_TOUCH_PX}px`;
  el.style.minHeight = `${PIN_TOUCH_PX}px`;
  el.style.width = `${PIN_TOUCH_PX}px`;
  el.style.height = `${PIN_TOUCH_PX}px`;
  el.style.padding = "0";
  el.style.margin = "0";
  el.style.border = "none";
  el.style.background = "transparent";
  el.style.cursor = "pointer";
  el.style.display = "flex";
  el.style.alignItems = "flex-end";
  el.style.justifyContent = "center";
  el.style.boxSizing = "border-box";
  el.style.touchAction = "none";
  el.style.setProperty("-webkit-tap-highlight-color", "transparent");
}

function getPinSvgMarkup(): string {
  const size = PIN_SVG_PX;
  const strokeWidth = 2;
  const r = 9;

  return `
<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M24 46s14-13.5 14-26C38 12.3 31.7 6 24 6S10 12.3 10 20c0 12.5 14 26 14 26Z" fill="${MAP_PRIMARY}" stroke="${MAP_SECONDARY}" stroke-width="${strokeWidth}"/>
  <circle cx="24" cy="20" r="${r}" fill="${MAP_SECONDARY}"/>
</svg>
  `.trim();
}
