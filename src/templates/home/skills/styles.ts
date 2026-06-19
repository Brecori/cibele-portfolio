import { ResponsiveImage } from "@/components/responsive-image";
import { SectionTitle } from "@/components/section-title";
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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  row-gap: 4.8rem;
  align-items: start;
  column-gap: 15rem;
  justify-content: center;
`;

export const SkillItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 1.6rem;
`;

export const SkillName = styled.h3`
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 700;
  color: ${theme.white};
`;

export const ToolsRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8.8rem;
  justify-content: center;
  margin-top: 3.2rem;
`;

export const ToolsImage = styled(ResponsiveImage)`
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-0.4rem) scale(1.05);
  }
`;
