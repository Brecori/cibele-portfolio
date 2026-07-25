"use client";

import { FC, useState } from "react";
import { Modal } from "@/components/modal";
import { GalleryGridProps } from "./props";
import * as S from "./styles";
import Image from "next/image";

const imageWidthandHeight: Record<
  GalleryGridProps["images"]["imgs"][number]["type"],
  { width: number; height: number }
> = {
  "1x1": { width: 260, height: 260 },
  "2x1": { width: 520, height: 260 },
  "1x2": { width: 260, height: 520 },
  "2x2": { width: 520, height: 520 },
  "3x1": { width: 780, height: 260 },
};

export const GalleryGrid: FC<GalleryGridProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const eagerImagesCount = images.specialGrid ? 3 : 5;

  if (images.imgs.length === 0) {
    return null;
  }

  return (
    <>
      <S.Section>
        <S.Grid
          $specialGrid={images.specialGrid}
          $specialHeight={images.specialHeight}
        >
          {images.imgs.map((image, index) => (
            <S.GridItem
              key={`${image.src}-${image.alt}`}
              $type={image.type}
              $specialHeight={images.specialHeight}
              $specialGrid={images.specialGrid}
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
                loading={index < eagerImagesCount ? "eager" : "lazy"}
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
              src={images.imgs[selectedImageIndex].src}
              alt={images.imgs[selectedImageIndex].alt}
              width={
                imageWidthandHeight[images.imgs[selectedImageIndex].type].width
              }
              height={
                imageWidthandHeight[images.imgs[selectedImageIndex].type].height
              }
            />
          </S.ModalImageWrapper>
        )}
      </Modal>
    </>
  );
};
