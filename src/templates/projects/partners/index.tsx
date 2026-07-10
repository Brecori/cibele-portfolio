import { FC } from "react";
import { brands } from "@/constants/project-partners";
import { ProjectPartnersProps } from "./props";
import { SectionTitle } from "@/components/section-title/styles";
import AnimatedContent from "@/components/animated-content";
import * as S from "./styles";
import { projectPartnersConstants } from "./constants";

export const ProjectPartners: FC<ProjectPartnersProps> = ({ partners }) => {
  const cards = partners?.map((name) => brands[name]) ?? [];

  if (cards.length === 0) {
    return null;
  }

  return (
    <S.Section>
      <AnimatedContent>
        <SectionTitle>{projectPartnersConstants.title}</SectionTitle>
      </AnimatedContent>
      <S.ProjectsPartnersGrid cards={cards} $cardsCount={cards.length} />
    </S.Section>
  );
};
