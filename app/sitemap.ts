import type { MetadataRoute } from "next";
import { SERVICES } from "@/constants/services";
import { ARTICLES } from "@/constants/articles";

const siteUrl = "https://www.pcs.co.tz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/clients",
    "/insights",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articleRoutes = ARTICLES.map((article) => ({
    url: `${siteUrl}/insights/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
