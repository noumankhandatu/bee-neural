import { MetadataRoute } from "next";
const baseurl = "https://bee-neural.vercel.app";

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
