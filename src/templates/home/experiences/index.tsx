import { FC } from "react";
import * as S from "./styles";
import { experiencesConstants as C } from "./constants";
import AnimatedContent from "@/components/animated-content";

export const Experiences: FC = () => {
  return (
    <S.ExperiencesSection id={C.id}>
      <AnimatedContent>
        <S.ExperiencesTitle>{C.title}</S.ExperiencesTitle>
      </AnimatedContent>
      <S.ExperiencesGrid cards={C.experiencesList} />
    </S.ExperiencesSection>
  );
};
