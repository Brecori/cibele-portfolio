import AnimatedContent from "@/components/animated-content";
import { ResponsiveImage } from "@/components/responsive-image";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(32rem, 0.95fr);
  align-items: center;
  gap: 8.7rem;
  padding-inline: var(--default-padding);
  margin-top: 10rem;

  ${mediaMaxDesktop1024`
    grid-template-columns: 1fr;
    gap: 4.8rem;
    margin-top: 10rem;
  `}

  ${mediaMaxMobile`
    gap: 3.2rem;
    margin-top: 8rem;
  `}
`;

export const Content = styled(AnimatedContent)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 56rem;

  ${mediaMaxDesktop1024`
    max-width: 100%;
  `}

  ${mediaMaxMobile`
    gap: 1.6rem;
  `}
`;

export const Description = styled.p`
  color: ${theme.white};
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 400;

  ${mediaMaxDesktop1024`
    font-size: 1.7rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.8rem;

  `}
`;

export const ImageWrapper = styled(AnimatedContent)`
  width: 100%;
`;

export const HeaderImage = styled(ResponsiveImage)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1.72 / 1;
  object-fit: cover;
  border-radius: 0.8rem;
`;
