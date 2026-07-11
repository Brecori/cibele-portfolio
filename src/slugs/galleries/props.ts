export type GalleryImageType = "1x1" | "1x2" | "2x1" | "2x2";

export interface GalleryImage {
  src: string;
  alt: string;
  type: GalleryImageType;
}

export interface GalleryProps {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  images: GalleryImage[];
}
