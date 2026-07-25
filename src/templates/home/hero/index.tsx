"use client";

import { FC } from "react";
import Image from "next/image";
import * as S from "./styles";
import { heroConstants as C } from "./constants";
import { useHeroAnimations } from "./animations";

export const Hero: FC = () => {
  const { imageRef, subtitleRef, titleRef } = useHeroAnimations();

  return (
    <S.HeroContainer>
      <S.HeroImage ref={imageRef}>
        <Image
          src={C.imageSrc}
          alt={C.imageAlt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
        />
      </S.HeroImage>
      <S.HeroTitle ref={titleRef}>{C.title}</S.HeroTitle>
      <S.HeroSubtitle ref={subtitleRef}>{C.subtitle}</S.HeroSubtitle>
    </S.HeroContainer>
  );
};
