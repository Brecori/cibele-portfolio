import { FC } from "react";
import { ProjectTemplateProps } from "./props";
import { ProjectsHeader } from "../shared/header";
import { ProjectsNavbar } from "../shared/projects-navbar";
import { ProjectAbout } from "./about";
import { ProjectHighlights } from "./highlights";
import { ProjectPartners } from "./partners";
import { Footer } from "../shared/footer";

export const ProjectsTemplate: FC<ProjectTemplateProps> = ({ project }) => {
  return (
    <main>
      <ProjectsNavbar image={project.image} />
      <ProjectsHeader
        title={project.title}
        subtitle={project.subtitle}
        tags={project.tags}
        accentColor={project.accentColor}
      />
      <ProjectAbout
        image={project.image}
        accentColor={project.accentColor}
        description={project.description}
        figmaUrl={project.figmaUrl}
      />
      <ProjectHighlights
        accentColor={project.accentColor}
        highlights={project.highlights}
      />
      <ProjectPartners partners={project.partners} />
      <Footer showSocialMedia={false} />
    </main>
  );
};
