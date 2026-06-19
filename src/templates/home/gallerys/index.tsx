import { FC } from "react";
import AnimatedContent from "@/components/animated-content";
import { gallerysConstants as C } from "./constants";
import * as S from "./styles";

export const Gallerys: FC = () => {
  return (
    <S.GallerysSection>
      <AnimatedContent>
        <S.GallerysTitle>{C.title}</S.GallerysTitle>
      </AnimatedContent>

      <S.GallerysGrid>
        {C.gallerysList.map((gallery, index) => (
          <AnimatedContent
            key={gallery.key}
            delay={0.15 * (index + 1)}
            duration={0.9}
          >
            <S.GalleryCard
              href={gallery.href}
              $backgroundImg={gallery.backgroundImg}
            >
              <S.GalleryTitle>{gallery.title}</S.GalleryTitle>
            </S.GalleryCard>
          </AnimatedContent>
        ))}
      </S.GallerysGrid>
    </S.GallerysSection>
  );
};
