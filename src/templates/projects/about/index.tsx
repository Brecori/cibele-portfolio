"use client";

import { FC, useState } from "react";
import { projectAboutConstants as C } from "./constants";
import { ProjectAboutProps } from "./props";
import * as S from "./styles";
import { SectionTitle } from "@/components/section-title";

export const ProjectAbout: FC<ProjectAboutProps> = ({
  image,
  accentColor,
  description,
  figmaUrl,
}) => {
  const [headerImage, setHeaderImage] = useState(() =>
    image ? C.headerImage(image) : C.headerImagePlaceholder,
  );

  return (
    <S.Section>
      <S.Content>
        <SectionTitle>{C.title}</SectionTitle>

        <S.Description>{description}</S.Description>

        {figmaUrl && (
          <S.Button
            href={figmaUrl}
            target="_blank"
            rel="noreferrer"
            $accentColor={accentColor}
          >
            {C.figmaButtonLabel}
          </S.Button>
        )}
      </S.Content>

      <S.ImageWrapper>
        <S.HeaderImage
          src={headerImage}
          alt={C.headerImageAlt}
          width={1828}
          height={848}
          loading="eager"
          quality={100}
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
