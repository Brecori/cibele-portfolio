import { BrandingCardGrid } from "@/components/branding-card-grid";
import { mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  margin-top: 10rem;
  padding-inline: var(--default-padding);

  ${mediaMaxMobile`
    gap: 3.2rem;
    margin-top: 8rem;
  `}
`;

export const ProjectsPartnersGrid = styled(BrandingCardGrid)<{
  $cardsCount: number;
}>`
  grid-template-columns: repeat(
    ${({ $cardsCount }) => $cardsCount},
    max-content
  );
  justify-content: space-between;
  row-gap: 4.8rem;
  width: 100%;

  ${mediaMaxMobile`
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    gap: 3.6rem;
  `}

  ${({ $cardsCount }) =>
    $cardsCount % 2 !== 0 &&
    mediaMaxMobile`
      & > *:last-child {
        grid-column: 1 / -1;
        justify-self: center;
      }
    `}
`;
