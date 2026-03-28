import { MetadataRoute } from "next";

const site = "https://www.mediterraneanaura.gr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
