"use client";

import { useEffect, useRef } from "react";
import type { FeatureCollection, Point } from "geojson";
import type { LngLatBounds, StyleSpecification } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

const MAP_PRIMARY = "#21343E";
const MAP_SECONDARY = "#DFD8CF";

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
          closeButton: true,
          closeOnClick: true,
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

          markerEl.addEventListener("click", () => {
            if (!map || !popup) return;
            popup
              .setLngLat([lng, lat])
              .setHTML(
                `<div style="padding:4px 6px;font-size:14px;color:${MAP_PRIMARY}">${escapeHtml(name)}</div>`,
              )
              .addTo(map);
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
      className="absolute inset-0 h-full w-full [&_.maplibregl-ctrl-attrib]:bg-secondary/90 [&_.maplibregl-ctrl-attrib]:text-[10px] [&_.maplibregl-ctrl-attrib]:text-primary/80"
      role="application"
      aria-label="Interactive map of villa locations in Rhodes"
    />
  );
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getPinSvgMarkup(): string {
  const size = 44;
  const strokeWidth = 2;
  const r = 9;

  return `
<svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M24 46s14-13.5 14-26C38 12.3 31.7 6 24 6S10 12.3 10 20c0 12.5 14 26 14 26Z" fill="${MAP_PRIMARY}" stroke="${MAP_SECONDARY}" stroke-width="${strokeWidth}"/>
  <circle cx="24" cy="20" r="${r}" fill="${MAP_SECONDARY}"/>
</svg>
  `.trim();
}
