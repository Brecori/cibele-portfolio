import { BrandName } from "@/constants/project-partners";
import { ColorFamily } from "@/styles/theme";
import { ReactNode } from "react";

export interface ProjectProps {
  slug: string;
  image?: string;
  accentColor: ColorFamily;
  title: string;
  subtitle: string;
  tags: string[];
  description: string | ReactNode;
  prototype: string | ReactNode;
  figmaUrl: string;
  highlights: { title: string; description: string }[];
  prototypeImages: { src: string; alt: string }[];
  partners?: BrandName[];
}
