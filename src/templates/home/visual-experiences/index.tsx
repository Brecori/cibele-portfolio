import { FC } from "react";
import * as S from "./styles";
import { visualExperiencesConstants as C } from "./constants";
import { SectionTitle } from "@/components/section-title";
import { ContentParagraph } from "@/components/content-paragraph";
import { ResponsiveImage } from "@/components/responsive-image";

export const VisualExperience: FC = () => {
  return (
    <S.VisualExperiencesSection>
      <ResponsiveImage
        src={C.image.src}
        alt={C.image.alt}
        width={660}
        height={413}
        loading="lazy"
      />
      <S.Content>
        <SectionTitle>{C.title}</SectionTitle>
        <ContentParagraph>{C.content}</ContentParagraph>
      </S.Content>
    </S.VisualExperiencesSection>
  );
};
