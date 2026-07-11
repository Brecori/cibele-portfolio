import { FC } from "react";
import AnimatedContent from "@/components/animated-content";
import { gallerysConstants as C } from "./constants";
import * as S from "./styles";

export const Galleries: FC = () => {
  return (
    <S.GallerysSection id={C.id}>
      <AnimatedContent>
        <S.GallerysTitle>{C.title}</S.GallerysTitle>
      </AnimatedContent>

      <S.GallerysGrid stagger={0.15}>
        {C.gallerysList.map((gallery) => (
          <S.GalleryCard
            key={gallery.key}
            href={gallery.href}
            $backgroundImg={gallery.backgroundImg}
          >
            <S.GalleryTitle>{gallery.title}</S.GalleryTitle>
          </S.GalleryCard>
        ))}
      </S.GallerysGrid>
    </S.GallerysSection>
  );
};
