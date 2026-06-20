import AnimatedContent from "@/components/animated-content";
import { SectionTitle } from "@/components/section-title";
import { mediaMaxDesktop1024 } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const GallerysSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin-top: 10rem;
  padding-inline: var(--default-padding);
`;

export const GallerysTitle = styled(SectionTitle)`
  text-align: center;
`;

export const GallerysGrid = styled(AnimatedContent)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 5.2rem;

  > div {
    width: 100%;
  }

  ${mediaMaxDesktop1024`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3.6rem;
  `}
`;

export const GalleryCard = styled.a<{ $backgroundImg: string }>`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 2.4rem;
  border-radius: 0.8rem;
  overflow: hidden;
  text-decoration: none;
  background-color: ${theme.zenGray};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(180deg, rgba(2, 2, 2, 0.02) 0%, rgba(2, 2, 2, 0.18) 100%),
      url(${({ $backgroundImg }) => $backgroundImg});
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease;
    transform: scale(1);
  }

  &:hover {
    transform: translateY(-0.8rem);
  }

  &:hover::before {
    transform: scale(1.05);
  }

  ${mediaMaxDesktop1024`
    aspect-ratio: 4 / 3;

    &:hover {
      transform: translateY(0);
    }
  `}
`;

export const GalleryTitle = styled.h3`
  position: relative;
  z-index: 1;
  font-size: 3.2rem;
  line-height: 1.2em;
  font-weight: 700;
  color: ${theme.white};

  ${mediaMaxDesktop1024`
    font-size: 2.4rem;
  `}
`;
