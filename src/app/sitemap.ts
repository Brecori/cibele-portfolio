import type { MetadataRoute } from "next";
import { galleries } from "@/slugs/galleries";
import { projects } from "@/slugs/projects";

const siteUrl = "https://cibele-portfolio.vercel.app";
const lastModified = new Date();

function buildUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: buildUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: buildUrl(`/projects/${project.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...galleries.map((gallery) => ({
      url: buildUrl(`/galleries/${gallery.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
