import { FC } from "react";
import * as S from "./styles";
import { experiencesConstants as C } from "./constants";
import AnimatedContent from "@/components/animated-content";
import { BrandingCardGrid } from "@/components/branding-card-grid";

export const Experiences: FC = () => {
  return (
    <S.ExperiencesSection>
      <AnimatedContent>
        <S.ExperiencesTitle>{C.title}</S.ExperiencesTitle>
      </AnimatedContent>
      <BrandingCardGrid cards={C.experiencesList} />
    </S.ExperiencesSection>
  );
};
