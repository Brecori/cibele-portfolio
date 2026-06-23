import { ProjectProps } from "@/slugs/projects/props";

export interface ProjectsHeaderProps {
  title: ProjectProps["title"];
  subtitle: ProjectProps["subtitle"];
  tags: ProjectProps["tags"];
  accentColor?: ProjectProps["accentColor"];
}
