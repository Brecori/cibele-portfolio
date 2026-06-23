import { FC } from "react";
import { ProjectTemplateProps } from "./props";
import { ProjectsHeader } from "../shared/header";
import { ProjectsNavbar } from "../shared/projects-navbar";

export const ProjectsTemplate: FC<ProjectTemplateProps> = ({ project }) => {
  return (
    <>
      <ProjectsNavbar image={project.image} />
      <ProjectsHeader
        title={project.title}
        subtitle={project.subtitle}
        tags={project.tags}
        accentColor={project.accentColor}
      />
    </>
  );
};
