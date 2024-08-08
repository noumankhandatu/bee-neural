import { MetadataRoute } from "next";
const baseurl = "https://beeneural.com/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseurl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: baseurl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseurl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
