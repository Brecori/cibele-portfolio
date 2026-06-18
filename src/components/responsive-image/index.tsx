import { FC } from "react";
import { ResponsiveImageProps } from "./props";
import * as S from "./styles";

export const ResponsiveImage: FC<ResponsiveImageProps> = ({
  alt,
  src,
  width,
  height,
  ...props
}) => {
  return (
    <S.ResponsiveImage
      $width={width}
      $height={height}
      alt={alt}
      src={src}
      width={width}
      height={height}
      {...props}
    />
  );
};
