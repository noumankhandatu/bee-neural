import { MetadataRoute } from "next";
const baseurl = "https://beeneural.com/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
    sitemap: `${baseurl}/sitemap.xml`,
  };
}
