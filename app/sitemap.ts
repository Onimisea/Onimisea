import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://onimisea.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: ["https://onimisea.com/image.jpg"],
      videos: [
        {
          title: "Onimisea",
          thumbnail_loc: "https://onimisea.com/image.jpg",
          description: "this is the introduction of onimisea; your fullstack engineer",
        },
      ],
    },
    {
      url: "https://onimisea.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://onimisea.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
