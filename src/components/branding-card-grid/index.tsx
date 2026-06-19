import { FC } from "react";
import { BrandingCardGridProps } from "./props";
import * as S from "./styles";
import AnimatedContent from "../animated-content";
import { BrandingCard } from "../branding-card";

export const BrandingCardGrid: FC<BrandingCardGridProps> = ({ cards, cardsPerRow = 6 }) => {
  return (
    <S.BrandingCardGrid $cardsPerRow={cardsPerRow}>
      {cards.map((exp, index) => (
        <AnimatedContent
          key={exp.logoAlt}
          stagger={0.6}
          delay={(1 + index) * 0.15}
        >
          <BrandingCard
            key={exp.logoAlt}
            logoSrc={exp.logoSrc}
            logoAlt={exp.logoAlt}
            title={exp.title}
            height={exp.height}
            width={exp.width}
            href={exp.href}
          />
        </AnimatedContent>
      ))}
    </S.BrandingCardGrid>
  );
};
