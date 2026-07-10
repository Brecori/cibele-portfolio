import { FC } from "react";
import AnimatedContent from "@/components/animated-content";
import { brands } from "@/constants/project-partners";
import { projectsConstants as C } from "./constants";
import * as S from "./styles";
import { SectionTitle } from "@/components/section-title";
import { ContentParagraph } from "@/components/content-paragraph";

export const Projects: FC = () => {
  return (
    <S.ProjectsSection id={C.id}>
      <S.Header>
        <AnimatedContent>
          <SectionTitle>{C.title}</SectionTitle>
        </AnimatedContent>
        <AnimatedContent>
          <ContentParagraph>{C.subtitle}</ContentParagraph>
        </AnimatedContent>
      </S.Header>

      <S.ProjectsGrid stagger={0.15}>
        {C.projectsList.map((project, index) => (
          <S.ProjectCard
            key={project.title}
            href={project.href}
            $backgroundImg={project.backgroundImg}
            $isFeatured={index === 0}
          >
            <S.ProjectContent>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectSubtitle>{project.subtitle}</S.ProjectSubtitle>
              <S.ProjectDescription>{project.description}</S.ProjectDescription>
            </S.ProjectContent>
          </S.ProjectCard>
        ))}
      </S.ProjectsGrid>
      <AnimatedContent>
        <S.ProjectsPartnersTitle>
          {C.projectsPartnersTitle}
        </S.ProjectsPartnersTitle>
      </AnimatedContent>
      <S.ProjectsPartnersGrid cards={C.projectsPartners.map((name) => brands[name])} />
    </S.ProjectsSection>
  );
};
