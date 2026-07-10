import AnimatedContent from "@/components/animated-content";
import { SectionTitle } from "@/components/section-title";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { ColorFamily, theme } from "@/styles/theme";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin-top: 10rem;
  padding-inline: var(--default-padding);

  ${mediaMaxMobile`
    gap: 3.2rem;
    margin-top: 8rem;
  `}
`;

export const Title = styled(SectionTitle)`
  text-align: center;
`;

export const Grid = styled(AnimatedContent)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4.35rem;

  ${mediaMaxDesktop1024`
    grid-template-columns: 1fr;
    gap: 2.4rem;
  `}
`;

export const Card = styled.article<{ $accentColor: ColorFamily }>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 12.7rem;
  padding-inline: 3.6rem;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${({ $accentColor }) => theme[$accentColor]};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.3rem);
  }

  ${mediaMaxMobile`
    min-height: auto;
    padding-inline: 2.4rem;

    &:hover {
      transform: none;
    }
  `}
`;

export const CardTitle = styled.h3`
  color: ${theme.white};
  font-size: 2.4rem;
  line-height: 1.3em;
  font-weight: 700;

  ${mediaMaxDesktop1024`
    font-size: 2rem;
  `}
`;

export const CardDescription = styled.p`
  color: ${theme.white};
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 400;

  ${mediaMaxDesktop1024`
    font-size: 1.6rem;
  `}
`;
