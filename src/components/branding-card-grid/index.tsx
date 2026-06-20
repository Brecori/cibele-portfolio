import { FC } from "react";
import { BrandingCardGridProps } from "./props";
import * as S from "./styles";
import { BrandingCard } from "../branding-card";

export const BrandingCardGrid: FC<BrandingCardGridProps> = ({
  cards,
  className,
}) => {
  return (
    <S.BrandingCardGrid className={className} stagger={0.15}>
      {cards.map((exp) => (
        <BrandingCard
          key={exp.logoAlt}
          logoSrc={exp.logoSrc}
          logoAlt={exp.logoAlt}
          title={exp.title}
          height={exp.height}
          width={exp.width}
        />
      ))}
    </S.BrandingCardGrid>
  );
};
