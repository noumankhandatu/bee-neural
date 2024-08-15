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
    {
      url: `${baseurl}/home`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/#services`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/#portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/#team`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/career`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/connect`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/legal-policy`,
      lastModified: new Date(),
    },
  ];
}
