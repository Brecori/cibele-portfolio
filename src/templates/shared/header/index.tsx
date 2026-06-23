import { FC } from "react";
import { ProjectsHeaderProps } from "./props";
import * as S from "./styles";

export const ProjectsHeader: FC<ProjectsHeaderProps> = ({
  title,
  subtitle,
  tags,
  accentColor,
}) => {
  return (
    <S.Section>
      <S.Header>
        <div>
          <S.Title>{title}</S.Title>
        </div>
        <div>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </div>
      </S.Header>

      <S.TagsList delay={0.6} stagger={0.3}>
        {tags.map((tag) => (
          <S.Tag key={tag} $accentColor={accentColor}>
            {tag}
          </S.Tag>
        ))}
      </S.TagsList>
    </S.Section>
  );
};
