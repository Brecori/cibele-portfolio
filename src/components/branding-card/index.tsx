import { FC } from "react";
import { BrandingCardProps } from "./props";
import * as S from "./styles";
import { ResponsiveImage } from "../responsive-image";

export const BrandingCard: FC<BrandingCardProps> = ({
  logoSrc,
  logoAlt,
  width,
  height,
  title,
}) => {
  return (
    <S.BrandingCard title={title}>
      <ResponsiveImage
        src={logoSrc}
        alt={logoAlt}
        width={width}
        height={height}
        loading="lazy"
      />
    </S.BrandingCard>
  );
};
