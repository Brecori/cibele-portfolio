"use client";

import { FC, useState } from "react";
import { projectAboutConstants as C } from "./constants";
import { ProjectAboutProps } from "./props";
import * as S from "./styles";

export const ProjectAbout: FC<ProjectAboutProps> = ({ image, description }) => {
  const [headerImage, setHeaderImage] = useState(() =>
    image ? C.headerImage(image) : C.headerImagePlaceholder,
  );

  return (
    <S.Section>
      <S.Content>
        <S.Title>{C.title}</S.Title>

        <S.Description>{description}</S.Description>
      </S.Content>

      <S.ImageWrapper>
        <S.HeaderImage
          src={headerImage}
          alt={C.headerImageAlt}
          width={550}
          height={344}
          loading="eager"
          onError={() => {
            if (headerImage !== C.headerImagePlaceholder) {
              setHeaderImage(C.headerImagePlaceholder);
            }
          }}
        />
      </S.ImageWrapper>
    </S.Section>
  );
};
