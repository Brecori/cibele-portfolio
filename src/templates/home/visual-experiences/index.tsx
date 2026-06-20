import { FC } from "react";
import * as S from "./styles";
import { visualExperiencesConstants as C } from "./constants";
import { SectionTitle } from "@/components/section-title";
import { ContentParagraph } from "@/components/content-paragraph";
import AnimatedContent from "@/components/animated-content";

export const VisualExperience: FC = () => {
  return (
    <S.VisualExperiencesSection>
      <AnimatedContent>
        <S.VisualImage
          src={C.image.src}
          alt={C.image.alt}
          width={660}
          height={413}
          loading="lazy"
        />
      </AnimatedContent>
      <AnimatedContent>
        <S.Content>
          <SectionTitle>{C.title}</SectionTitle>
          <ContentParagraph>{C.content}</ContentParagraph>
        </S.Content>
      </AnimatedContent>
    </S.VisualExperiencesSection>
  );
};
