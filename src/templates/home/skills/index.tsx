import { FC } from "react";
import AnimatedContent from "@/components/animated-content";
import { skillsConstants as C } from "./constants";
import * as S from "./styles";
import { ContentParagraph } from "@/components/content-paragraph";

export const Skills: FC = () => {
  return (
    <S.SkillsSection>
      <AnimatedContent>
        <S.SkillsTitle>{C.title}</S.SkillsTitle>
      </AnimatedContent>

      <S.SkillsGrid>
        {C.skillsList.map((skill, index) => (
          <AnimatedContent
            key={skill.key}
            delay={0.12 * (index + 1)}
            stagger={0.3}
          >
            <S.SkillItem>
              <S.SkillName>{skill.title}</S.SkillName>
              <ContentParagraph>{skill.description}</ContentParagraph>
            </S.SkillItem>
          </AnimatedContent>
        ))}
      </S.SkillsGrid>

      <S.ToolsRow>
        {C.toolsList.map((tool, index) => (
          <AnimatedContent key={tool.key} delay={0.15 * (index + 1)}>
            <S.ToolsImage
              src={tool.src}
              alt={tool.alt}
              width={tool.width}
              height={tool.height}
              title={tool.title}
            />
          </AnimatedContent>
        ))}
      </S.ToolsRow>
    </S.SkillsSection>
  );
};
