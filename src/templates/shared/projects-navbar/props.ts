import { ProjectProps } from "@/slugs/projects/props";

type ProjectNavbarWithLogo = {
  image: NonNullable<ProjectProps["image"]>;
  figmaLink: ProjectProps["figmaUrl"];
};

type ProjectNavbarWithoutLogo = {
  image?: undefined;
  figmaLink?: undefined;
};

export type ProjectsNavbarProps =
  | ProjectNavbarWithLogo
  | ProjectNavbarWithoutLogo;
