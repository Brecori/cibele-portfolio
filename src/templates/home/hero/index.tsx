"use client";

import { FC } from "react";
import { getImageProps } from "next/image";
import { viewportsBase } from "@/constants/viewport-base";
import * as S from "./styles";
import { heroConstants as C } from "./constants";
import { useHeroAnimations } from "./animations";

export const Hero: FC = () => {
  const { imageRef, subtitleRef, titleRef } = useHeroAnimations();
  const commonImageProps = {
    alt: C.imageAlt,
    priority: true,
    fetchPriority: "high" as const,
    quality: 100,
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...commonImageProps,
    ...C.image.desktop,
  });
  const {
    props: mobileImageProps,
  } = getImageProps({
    ...commonImageProps,
    ...C.image.mobile,
  });

  return (
    <S.HeroContainer>
      <S.HeroImage ref={imageRef}>
        <picture>
          <source
            media={`(min-width: ${viewportsBase.mobile.width + 1}px)`}
            srcSet={desktopSrcSet}
          />
          <img {...mobileImageProps} alt={C.imageAlt} />
        </picture>
      </S.HeroImage>
      <S.HeroTitle ref={titleRef}>{C.title}</S.HeroTitle>
      <S.HeroSubtitle ref={subtitleRef}>{C.subtitle}</S.HeroSubtitle>
    </S.HeroContainer>
  );
};
