"use client";

import { FC, useCallback, useState } from "react";
import AnimatedContent from "@/components/animated-content";
import { skillsConstants as C } from "./constants";
import * as S from "./styles";
import { ContentParagraph } from "@/components/content-paragraph";
import { ResponsiveElement } from "@/lib/ResponsiveElement";

export const Skills: FC = () => {
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  const handleAccordionToggle = useCallback((index: number) => {
    setAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <S.SkillsSection id={C.id}>
      <AnimatedContent>
        <S.SkillsTitle>{C.title}</S.SkillsTitle>
      </AnimatedContent>

      <S.SkillsGrid stagger={0.15}>
        {C.skillsList.map((skill, index) => (
          <ResponsiveElement
            key={skill.key}
            content={
              <S.SkillItem>
                <S.SkillName>{skill.title}</S.SkillName>
                <ContentParagraph>{skill.description}</ContentParagraph>
              </S.SkillItem>
            }
            breakpoints={{
              desktop1024: (
                <S.SkillItem>
                  <S.SkillAccordionTitle
                    $isOpen={accordionOpen === index}
                    onClick={() => handleAccordionToggle(index)}
                    aria-expanded={accordionOpen === index}
                  >
                    {skill.title}
                  </S.SkillAccordionTitle>
                  <S.SkillAccordionWrapper $isOpen={accordionOpen === index}>
                    <S.SkillAccordionContent $isOpen={accordionOpen === index}>
                      <S.SkillDescription>
                        {skill.description}
                      </S.SkillDescription>
                    </S.SkillAccordionContent>
                  </S.SkillAccordionWrapper>
                </S.SkillItem>
              ),
            }}
          />
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
