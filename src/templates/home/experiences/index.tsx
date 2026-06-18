import { FC } from "react";
import * as S from "./styles";
import { experiencesConstants as C } from "./constants";
import { BrandingCard } from "@/components/branding-card";
import AnimatedContent from "@/components/animated-content";

export const Experiences: FC = () => {
  return (
    <S.ExperiencesSection>
      <AnimatedContent>
        <S.ExperiencesTitle>{C.title}</S.ExperiencesTitle>
      </AnimatedContent>
      <S.ExperiencesList>
        {C.experiencesList.map((exp, index) => (
          <AnimatedContent
            key={exp.alt}
            stagger={0.6}
            delay={(1 + index) * 0.15}
          >
            <BrandingCard
              key={exp.alt}
              logoSrc={exp.src}
              logoAlt={exp.alt}
              title={exp.title}
              height={exp.height}
              width={exp.width}
            />
          </AnimatedContent>
        ))}
      </S.ExperiencesList>
    </S.ExperiencesSection>
  );
};
