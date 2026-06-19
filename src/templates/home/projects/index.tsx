import { FC } from "react";
import AnimatedContent from "@/components/animated-content";
import { projectsConstants as C } from "./constants";
import * as S from "./styles";
import { SectionTitle } from "@/components/section-title";
import { ContentParagraph } from "@/components/content-paragraph";
import { BrandingCardGrid } from "@/components/branding-card-grid";

export const Projects: FC = () => {
  return (
    <S.ProjectsSection>
      <S.Header>
        <AnimatedContent>
          <SectionTitle>{C.title}</SectionTitle>
        </AnimatedContent>
        <AnimatedContent>
          <ContentParagraph>{C.subtitle}</ContentParagraph>
        </AnimatedContent>
      </S.Header>

      <S.ProjectsGrid>
        {C.projectsList.map((project, index) => (
          <AnimatedContent
            key={project.title}
            delay={0.15 * (index + 1)}
            duration={0.9}
          >
            <S.ProjectCard
              href={project.href}
              $backgroundImg={project.backgroundImg}
              $isFeatured={index === 0}
            >
              <S.ProjectContent>
                <S.ProjectTitle>{project.title}</S.ProjectTitle>
                <S.ProjectSubtitle>{project.subtitle}</S.ProjectSubtitle>
                <S.ProjectDescription>
                  {project.description}
                </S.ProjectDescription>
              </S.ProjectContent>
            </S.ProjectCard>
          </AnimatedContent>
        ))}
      </S.ProjectsGrid>
      <AnimatedContent>
        <S.ProjectsPartnersTitle>
          {C.projectsPartnersTitle}
        </S.ProjectsPartnersTitle>
      </AnimatedContent>
      <BrandingCardGrid
        cards={C.projectsPartnersList}
        cardsPerRow={5}
      />
    </S.ProjectsSection>
  );
};
