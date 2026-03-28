import { MetadataRoute } from "next";

const base = "https://www.mediterraneanaura.gr";
// Static date for predictable caching — bump when you ship meaningful content changes
const lastModified = new Date("2026-03-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/terms-of-service`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
