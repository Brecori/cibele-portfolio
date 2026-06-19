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
  href,
}) => {
  const CardElement = href ? S.BrandingCardLink : S.BrandingCard;

  return (
    <CardElement title={title} href={href}>
      <ResponsiveImage
        src={logoSrc}
        alt={logoAlt}
        width={width}
        height={height}
        loading="lazy"
      />
    </CardElement>
  );
};
