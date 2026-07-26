import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { GalleryImageType } from "@/slugs/galleries/props";
import Image from "next/image";
import styled, { css } from "styled-components";

const imageTypeStyles = {
  "1x1": css`
    grid-column: span 1;
    grid-row: span 1;
  `,
  "1x2": css`
    grid-column: span 1;
    grid-row: span 2;
  `,
  "2x1": css`
    grid-column: span 2;
    grid-row: span 1;
  `,
  "2x2": css`
    grid-column: span 2;
    grid-row: span 2;
  `,
  "3x1": css`
    grid-column: span 3;
    grid-row: span 1;
  `,
};

const specialGridImageTypeStyles = {
  ...imageTypeStyles,
  "2x2": css`
    grid-column: span 7;
    grid-row: span 2;
  `,
  "3x1": css`
    grid-column: span 8;
    grid-row: span 1;
  `,
};

const skeletonAnimation = css`
  @keyframes gallerySkeleton {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`;

export const Section = styled.section`
  margin-top: 10rem;
  padding-inline: var(--default-padding);

  ${mediaMaxMobile`
    margin-top: 8rem;
  `}
`;

const gridItemStyles = css<{
  $type: GalleryImageType;
  $specialHeight?: boolean;
  $specialGrid?: boolean;
}>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.08);
  ${({ $type, $specialGrid }) =>
    $specialGrid ? specialGridImageTypeStyles[$type] : imageTypeStyles[$type]}

  &::before {
    ${skeletonAnimation}
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.14),
      transparent
    );
    animation: gallerySkeleton 1.4s ease-in-out infinite;
  }

  ${mediaMaxMobile`
    &[data-type="2x1"],
    &[data-type="2x2"],
    &[data-type="3x1"] {
      grid-column: span 2;
    }
  `}
`;

export const Grid = styled.div<{
  $specialGrid?: boolean;
  $specialHeight?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(
    ${({ $specialGrid }) => ($specialGrid ? 15 : 4)},
    minmax(0, 1fr)
  );
  gap: 4rem;
  grid-auto-rows: ${({ $specialHeight }) =>
    $specialHeight ? "46rem" : "34rem"};

  ${mediaMaxDesktop1024`
    gap: 3.2rem;
    grid-auto-rows: ${({ $specialHeight }) =>
      $specialHeight ? "26rem" : "19.2rem"};
  `}

  ${mediaMaxMobile`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: ${({ $specialHeight }) =>
      $specialHeight ? "34rem" : "25rem"};
    gap: 1.6rem;
  `}
`;

export const GridItem = styled.button<{
  $type: GalleryImageType;
  $specialHeight?: boolean;
  $specialGrid?: boolean;
}>`
  ${gridItemStyles}

  img {
    object-position: ${({ $type }) => ($type === "1x2" ? "top" : "center")};
  }
`;

export const GridImage = styled(Image)`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  ${mediaMaxMobile`
    &:hover {
      transform: none;
    }
  `}
`;

export const ModalImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.8rem;
  }
`;
