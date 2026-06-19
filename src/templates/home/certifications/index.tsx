import { FC } from "react";
import AnimatedContent from "@/components/animated-content";
import { BrandingCardGrid } from "@/components/branding-card-grid";
import { certificationsConstants as C } from "./constants";
import * as S from "./styles";

export const Certifications: FC = () => {
  return (
    <S.CertificationsSection>
      <AnimatedContent>
        <S.CertificationsTitle>{C.title}</S.CertificationsTitle>
      </AnimatedContent>
      <BrandingCardGrid cards={C.certificationsList} cardsPerRow={5} />
    </S.CertificationsSection>
  );
};
