"use client";

import { FC, useState } from "react";
import { Modal } from "@/components/modal";
import { GalleryGridProps } from "./props";
import * as S from "./styles";
import Image from "next/image";

const isGif = (src: string) => {
  const filePath = src.split(/[?#]/)[0];

  return filePath.toLowerCase().endsWith(".gif");
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
                width={image.width}
                height={image.height}
                loading={index < eagerImagesCount ? "eager" : "lazy"}
                unoptimized={isGif(image.src)}
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
              width={images.imgs[selectedImageIndex].width}
              height={images.imgs[selectedImageIndex].height}
            />
          </S.ModalImageWrapper>
        )}
      </Modal>
    </>
  );
};
