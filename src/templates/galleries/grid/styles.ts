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
}>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  ${({ $type }) => imageTypeStyles[$type]}


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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4rem;
  grid-auto-rows: ${({ $specialHeight }) =>
    $specialHeight ? "46rem" : "34rem"};
  ${({ $specialGrid, $specialHeight }) =>
    $specialGrid &&
    css`
      grid-template-rows: repeat(5, ${$specialHeight ? "46rem" : "34rem"});
    `}

  ${mediaMaxDesktop1024`
    gap: 3.2rem;
    grid-auto-rows: 19.2rem;
  `}

  ${mediaMaxMobile`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 25rem;
    gap: 1.6rem;
  `}
`;

export const GridItem = styled.button<{
  $type: GalleryImageType;
  $specialHeight?: boolean;
}>`
  ${gridItemStyles}
`;

export const GridImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  object-position: top;

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
