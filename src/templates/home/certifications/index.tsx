import { FC } from "react";
import AnimatedContent from "@/components/animated-content";
import { brands } from "@/constants/project-partners";
import { certificationsConstants as C } from "./constants";
import * as S from "./styles";

export const Certifications: FC = () => {
  return (
    <S.CertificationsSection>
      <AnimatedContent>
        <S.CertificationsTitle>{C.title}</S.CertificationsTitle>
      </AnimatedContent>
      <S.CertificationsGrid cards={C.certifications.map((name) => brands[name])} />
    </S.CertificationsSection>
  );
};
