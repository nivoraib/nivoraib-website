import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nivoraib.com";
  const routes = [
    "",
    "/platform",
    "/features",
    "/how-it-works",
    "/dashboard",
    "/about",
    "/team",
    "/careers",
    "/contact",
    "/resources",
    "/roadmap",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
