import { ColorFamily } from "@/styles/theme";

export interface ProjectProps {
  slug: string;
  image?: string;
  accentColor: ColorFamily;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  prototype: string;
  figmaUrl: string;
  highlights: { title: string; description: string }[];
  prototypeImages: { src: string; alt: string }[];
  partners?: { name: string; logoUrl: string; altUrl: string }[];
}
