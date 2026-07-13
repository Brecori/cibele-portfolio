import AnimatedContent from "@/components/animated-content";
import { ResponsiveImage } from "@/components/responsive-image";
import { SectionTitle } from "@/components/section-title";
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
  `}

  ${mediaMaxMobile`
    gap: 3.2rem;
    margin-top: 8rem;
  `}
`;

export const Content = styled(AnimatedContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  max-width: 56rem;

  ${mediaMaxDesktop1024`
    max-width: 100%;
  `}

  ${mediaMaxMobile`
    gap: 1.6rem;
  `}
`;

export const Title = styled(SectionTitle)`
  text-align: left;
`;

export const Description = styled.div`
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

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 5rem;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  background-color: ${theme.white};
  color: ${theme.darkBlack};
  font-size: 1.8rem;
  line-height: 1.3em;
  font-weight: 700;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.2rem);
    opacity: 0.92;
  }

  ${mediaMaxDesktop1024`
    font-size: 1.6rem;
  `}

  ${mediaMaxMobile`
    width: 100%;
    min-height: 4.8rem;
    font-size: 1.8rem;

    &:hover {
      transform: none;
      opacity: 1;
    }
  `}
`;

export const Grid = styled(AnimatedContent)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4.8rem;

  ${mediaMaxMobile`
    gap: 1.6rem;
  `}
`;

export const ImageCard = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.8rem;
`;

export const ImageButton = styled.button`
  display: block;
  width: 100%;
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const PrototypeImage = styled(ResponsiveImage)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  border-radius: 0.8rem;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ModalImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 0.8rem;
  }
`;
