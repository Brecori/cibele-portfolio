import { ProjectProps } from "@/slugs/projects/props";

export interface ProjectAboutProps {
  image?: ProjectProps["image"];
  accentColor: ProjectProps["accentColor"];
  description: ProjectProps["description"];
  figmaUrl: ProjectProps["figmaUrl"];
}
