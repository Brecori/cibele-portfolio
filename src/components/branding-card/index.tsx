import { FC } from "react";
import { BrandingCardProps } from "./props";
import * as S from "./styles";

export const BrandingCard: FC<BrandingCardProps> = ({
  logoSrc,
  logoAlt,
  width,
  height,
  title,
}) => {
  return (
    <S.BrandingCard title={title}>
      <S.BrandingCardImage
        src={logoSrc}
        alt={logoAlt}
        $width={width}
        width={width}
        height={height}
        loading="lazy"
      />
    </S.BrandingCard>
  );
};
