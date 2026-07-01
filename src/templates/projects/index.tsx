import { FC } from "react";
import { ProjectTemplateProps } from "./props";
import { ProjectsHeader } from "../shared/header";
import { ProjectsNavbar } from "../shared/projects-navbar";
import { ProjectAbout } from "./project-about";

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
      <ProjectAbout image={project.image} description={project.description} />
    </>
  );
};
