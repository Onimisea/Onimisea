import type { MetadataRoute } from "next"
import { onimiseaSite } from "@workspace/brand/next/metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: onimiseaSite.url,
      lastModified: new Date("2026-06-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
