import { FC } from "react";
import { ProjectHighlightsProps } from "./props";
import { projectsHighlightsConstants } from "./constants";
import * as S from "./styles";
import AnimatedContent from "@/components/animated-content";

export const ProjectHighlights: FC<ProjectHighlightsProps> = ({
  accentColor,
  highlights,
}) => {
  if (!highlights.length) {
    return null;
  }

  return (
    <S.Section>
      <AnimatedContent>
        <S.Title>{projectsHighlightsConstants.title}</S.Title>
      </AnimatedContent>

      <S.Grid stagger={0.12}>
        {highlights.map((highlight) => (
          <S.Card key={highlight.title} $accentColor={accentColor}>
            <S.CardTitle>{highlight.title}</S.CardTitle>
            <S.CardDescription>{highlight.description}</S.CardDescription>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
};
