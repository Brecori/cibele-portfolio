import { FC } from "react";
import AnimatedContent from "@/components/animated-content";
import { certificationsConstants as C } from "./constants";
import * as S from "./styles";

export const Certifications: FC = () => {
  return (
    <S.CertificationsSection>
      <AnimatedContent>
        <S.CertificationsTitle>{C.title}</S.CertificationsTitle>
      </AnimatedContent>
      <S.CertificationsGrid cards={C.certificationsList} />
    </S.CertificationsSection>
  );
};
