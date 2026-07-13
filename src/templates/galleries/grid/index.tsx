"use client";

import { FC, useState } from "react";
import { Modal } from "@/components/modal";
import { GalleryGridProps } from "./props";
import * as S from "./styles";
import Image from "next/image";

const imageWidthandHeight: Record<
  GalleryGridProps["images"][number]["type"],
  { width: number; height: number }
> = {
  "1x1": { width: 260, height: 260 },
  "2x1": { width: 520, height: 260 },
  "1x2": { width: 260, height: 520 },
  "2x2": { width: 520, height: 520 },
};

export const GalleryGrid: FC<GalleryGridProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <S.Section>
        <S.Grid>
          {images.map((image, index) => (
            <S.GridItem
              key={`${image.src}-${image.alt}`}
              $type={image.type}
              data-type={image.type}
              type="button"
              aria-label={image.alt}
              onClick={() => {
                setSelectedImageIndex(index);
              }}
            >
              <S.GridImage
                src={image.src}
                alt={image.alt}
                width={imageWidthandHeight[image.type].width}
                height={imageWidthandHeight[image.type].height}
              />
            </S.GridItem>
          ))}
        </S.Grid>
      </S.Section>
      <Modal
        isOpen={selectedImageIndex !== null}
        onClose={() => {
          setSelectedImageIndex(null);
        }}
      >
        {selectedImageIndex !== null && (
          <S.ModalImageWrapper>
            <Image
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              width={imageWidthandHeight[images[selectedImageIndex].type].width}
              height={
                imageWidthandHeight[images[selectedImageIndex].type].height
              }
            />
          </S.ModalImageWrapper>
        )}
      </Modal>
    </>
  );
};
