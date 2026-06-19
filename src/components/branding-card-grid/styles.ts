import { mediaMaxDesktop1024 } from "@/lib/media-query";
import styled from "styled-components";

export const BrandingCardGrid = styled.div<{
  $cardsPerRow?: number;
  $mobileCardsPerRow?: number;
}>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.$cardsPerRow || 6},
    max-content
  );
  row-gap: 4.8rem;
  justify-content: space-between;

  ${mediaMaxDesktop1024`
    grid-template-columns: repeat(${(props) => props.$mobileCardsPerRow || 3}, max-content);
    justify-content: center;
    column-gap: 4.8rem;
  `}
`;
