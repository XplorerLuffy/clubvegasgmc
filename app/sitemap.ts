import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = ["", "/about", "/karaoke", "/drinks", "/nights", "/find-us", "/reserve"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/nights" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
