import type { MetadataRoute } from "next"
import { onimiseaSite } from "@workspace/brand/next/metadata"
import { getPosts, getProjects } from "@/lib/public-api"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()])
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: onimiseaSite.url,
      lastModified: new Date("2026-06-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
    { url: `${onimiseaSite.url}/work`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${onimiseaSite.url}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${onimiseaSite.url}/contact`, changeFrequency: "monthly", priority: 0.7 },
  ]
  return [
    ...staticRoutes,
    ...projects.map((project) => ({
      url: `${onimiseaSite.url}/work/${project.slug}`,
      lastModified: project.end_date ?? project.start_date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...(posts?.results ?? []).map((post) => ({
      url: `${onimiseaSite.url}/blog/${post.slug}`,
      lastModified: post.published_at,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
