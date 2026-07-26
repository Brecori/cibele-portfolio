import AnimatedContent from "@/components/animated-content";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { ColorFamily, theme } from "@/styles/theme";
import Image from "next/image";
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

export const Description = styled.p`
  color: ${theme.white};
  font-size: 1.6rem;
  line-height: 1.4em;
  font-weight: 400;

  ${mediaMaxDesktop1024`
    font-size: 1.7rem;
  `}

  ${mediaMaxMobile`
    font-size: 1.8rem;

  `}
`;

export const Button = styled.a<{ $accentColor: ColorFamily }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 6rem;
  padding: 1.7rem 3.4rem;
  border-radius: 0.8rem;
  background-color: ${theme.white};
  color: ${({ $accentColor }) => theme[$accentColor]};
  font-size: 2rem;
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

export const ImageWrapper = styled(AnimatedContent)`
  width: 100%;
  height: 43.2rem;
`;

export const HeaderImage = styled(Image)`
  width: 100%;
  height: 47rem;
  border-radius: 0.8rem;
`;
