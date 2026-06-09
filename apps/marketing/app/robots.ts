import type { MetadataRoute } from "next"
import { onimiseaSite } from "@workspace/brand/next/metadata"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${onimiseaSite.url}/sitemap.xml`,
    host: onimiseaSite.url,
  }
}
