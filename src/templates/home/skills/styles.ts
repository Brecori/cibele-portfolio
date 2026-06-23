import AnimatedContent from "@/components/animated-content";
import { ContentParagraph } from "@/components/content-paragraph";
import { ResponsiveImage } from "@/components/responsive-image";
import { SectionTitle } from "@/components/section-title";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin-top: 10rem;
  padding-inline: var(--default-padding);
`;

export const SkillsTitle = styled(SectionTitle)`
  text-align: center;
`;

export const SkillAccordionTitle = styled.button<{ $isOpen: boolean }>`
  font-size: 2.4rem;
  line-height: 1.3em;
  font-weight: 700;
  color: ${theme.white};
  text-align: left;
  width: 100%;
  padding-block: 2.4rem;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 1.6rem;
    height: 1.6rem;
    border-bottom: 0.2rem solid ${theme.white};
    transition: transform 0.3s ease;
  }

  &::after {
    transform: translateY(-50%)
      translateX(${({ $isOpen }) => ($isOpen ? "0.32rem" : "-0.8rem")})
      rotate(45deg);
  }

  &::before {
    transform: translateY(-50%)
      translateX(${({ $isOpen }) => ($isOpen ? "-1.92rem" : "-0.8rem")})
      rotate(-45deg);
  }

  br {
    display: none;
  }
`;

export const SkillsGrid = styled(AnimatedContent)`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  row-gap: 4.8rem;
  align-items: start;
  column-gap: 15rem;
  justify-content: center;

  ${mediaMaxDesktop1024`
    grid-template-columns: 1fr;
    gap: 0;
  `}
`;

export const SkillItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 1.6rem;

  ${mediaMaxDesktop1024`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    border-bottom: 0.1rem solid ${theme.white};
  `}
`;

export const SkillName = styled.h3`
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 700;
  color: ${theme.white};
`;

export const SkillAccordionWrapper = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  overflow: hidden;
  transition: grid-template-rows 0.3s ease;
`;

export const SkillAccordionContent = styled.div<{ $isOpen: boolean }>`
  min-height: 0;
  overflow: hidden;
  padding-bottom: ${({ $isOpen }) => ($isOpen ? "2.4rem" : "0")};
  display: grid;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "1rem")});
  transition:
    padding-bottom 0.3s ease,
    opacity 0.2s ease,
    transform 0.3s ease;
`;

export const SkillDescription = styled(ContentParagraph)`
  br {
    display: none;
  }
`;

export const ToolsRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8.8rem;
  justify-content: center;
  margin-top: 3.2rem;

  ${mediaMaxDesktop1024`
    gap: 4.8rem;
  `}
`;

export const ToolsImage = styled(ResponsiveImage)`
  width: 4.4rem;
  height: 4.4rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-0.4rem) scale(1.05);
  }

  ${mediaMaxMobile`
  width: 5rem
  `}
`;
