import type { Metadata } from "next";
import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import type { GalleryProps } from "@/slugs/galleries/props";
import type { ProjectProps } from "@/slugs/projects/props";

const siteTitle = "Cibele Rodrigues";
const defaultSocialImage = "/imgs/hero/hero.png";

function normalizeWhitespace(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function truncate(text: string, maxLength = 160) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trimEnd()}...`;
}

export function extractPlainText(content: ReactNode): string {
  if (typeof content === "string" || typeof content === "number") {
    return String(content);
  }

  if (!content || typeof content === "boolean") {
    return "";
  }

  if (Array.isArray(content)) {
    return normalizeWhitespace(content.map(extractPlainText).join(" "));
  }

  if (isValidElement(content)) {
    const element = content as ReactElement<{ children?: ReactNode }>;

    return normalizeWhitespace(
      Children.toArray(element.props.children).map(extractPlainText).join(" "),
    );
  }

  return "";
}

function buildProjectDescription(project: ProjectProps) {
  const description = extractPlainText(project.description);

  return truncate(
    normalizeWhitespace(
      `${description} ${project.tags.slice(0, 3).join(", ")}. Projeto de ${siteTitle}.`,
    ),
  );
}

function buildGalleryDescription(gallery: GalleryProps) {
  return truncate(
    normalizeWhitespace(
      `${gallery.subtitle} Trabalhos de ${gallery.tags.slice(0, 3).join(", ")} no portfólio de ${siteTitle}.`,
    ),
  );
}

export function buildProjectMetadata(project: ProjectProps): Metadata {
  const description = buildProjectDescription(project);
  const image = project.image
    ? `/svg/projects/${project.image}/logo.svg`
    : defaultSocialImage;

  return {
    title: project.title,
    description,
    keywords: [project.title, ...project.tags, siteTitle, "portfólio", "UX/UI"],
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: `/projects/${project.slug}`,
      title: `${project.title} | ${siteTitle}`,
      description,
      images: [
        {
          url: image,
          alt: `${project.title} | ${siteTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteTitle}`,
      description,
      images: [image],
    },
  };
}

export function buildGalleryMetadata(gallery: GalleryProps): Metadata {
  const description = buildGalleryDescription(gallery);

  return {
    title: gallery.title,
    description,
    keywords: [gallery.title, ...gallery.tags, siteTitle, "portfólio", "design visual"],
    alternates: {
      canonical: `/galleries/${gallery.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: `/galleries/${gallery.slug}`,
      title: `${gallery.title} | ${siteTitle}`,
      description,
      images: [
        {
          url: defaultSocialImage,
          width: 1200,
          height: 630,
          alt: `${gallery.title} | ${siteTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${gallery.title} | ${siteTitle}`,
      description,
      images: [defaultSocialImage],
    },
  };
}
