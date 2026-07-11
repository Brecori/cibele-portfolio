import { FC } from "react";
import { GalleryGridProps } from "./props";
import * as S from "./styles";

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
  if (images.length === 0) {
    return null;
  }

  return (
    <S.Section>
      <S.Grid>
        {images.map((image) => (
          <S.GridItem
            key={`${image.src}-${image.alt}`}
            $type={image.type}
            data-type={image.type}
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
  );
};
