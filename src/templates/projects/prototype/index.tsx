"use client";

import { FC, useState } from "react";
import { Modal } from "@/components/modal";
import { ResponsiveImage } from "@/components/responsive-image";
import { projectPrototypeConstants as C } from "./constants";
import { ProjectPrototypeProps } from "./props";
import * as S from "./styles";

const getPrototypeImages = (image?: string) =>
  C.prototypeIndexes.map((index) =>
    image ? C.prototypeImage(image, index) : C.prototypeImagePlaceholder,
  );

export const ProjectPrototype: FC<ProjectPrototypeProps> = ({
  image,
  prototype,
  figmaUrl,
}) => {
  const [prototypeImages, setPrototypeImages] = useState(() =>
    getPrototypeImages(image),
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  return (
    <S.Section>
      <S.Content>
        <S.Title>{C.title}</S.Title>

        <S.Description>{prototype}</S.Description>

        {figmaUrl && (
          <S.Button href={figmaUrl} target="_blank" rel="noreferrer">
            {C.figmaButtonLabel}
          </S.Button>
        )}
      </S.Content>

      <S.Grid stagger={0.12}>
        {prototypeImages.map((prototypeImage, index) => (
          <S.ImageCard key={C.prototypeIndexes[index]}>
            <S.ImageButton
              type="button"
              aria-label={C.prototypeImageAlt(C.prototypeIndexes[index])}
              onClick={() => {
                setSelectedImageIndex(index);
              }}
            >
              <S.PrototypeImage
                src={prototypeImage}
                alt={C.prototypeImageAlt(C.prototypeIndexes[index])}
                width={400}
                height={400}
                onError={() => {
                  if (prototypeImage === C.prototypeImagePlaceholder) {
                    return;
                  }

                  setPrototypeImages((currentImages) =>
                    currentImages.map((currentImage, currentIndex) =>
                      currentIndex === index
                        ? C.prototypeImagePlaceholder
                        : currentImage,
                    ),
                  );
                }}
              />
            </S.ImageButton>
          </S.ImageCard>
        ))}
      </S.Grid>

      <Modal
        isOpen={selectedImageIndex !== null}
        onClose={() => {
          setSelectedImageIndex(null);
        }}
      >
        {selectedImageIndex !== null && (
          <S.ModalImageWrapper>
            <ResponsiveImage
              src={prototypeImages[selectedImageIndex]}
              alt={C.prototypeImageAlt(C.prototypeIndexes[selectedImageIndex])}
              width={1200}
              height={1200}
            />
          </S.ModalImageWrapper>
        )}
      </Modal>
    </S.Section>
  );
};
