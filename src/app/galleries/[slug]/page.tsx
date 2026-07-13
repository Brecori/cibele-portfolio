import type { Metadata } from "next";
import { buildGalleryMetadata } from "@/lib/metadata";
import { galleries } from "@/slugs/galleries";
import { GalleriesTemplate } from "@/templates/galleries";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  return galleries.map((gallery) => ({
    slug: gallery.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gallery = galleries.find((item) => item.slug === slug);

  if (!gallery) {
    return {};
  }

  return buildGalleryMetadata(gallery);
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const gallery = galleries.find((item) => item.slug === slug);

  if (!gallery) {
    notFound();
  }

  return <GalleriesTemplate gallery={gallery} />;
}
