import { BrandingCardGrid } from "@/components/branding-card-grid";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { SectionTitle } from "@/components/section-title";
import styled from "styled-components";

export const ExperiencesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin-top: 10rem;
  padding-inline: var(--default-padding);
`;

export const ExperiencesTitle = styled(SectionTitle)`
  text-align: center;
`;

export const ExperiencesGrid = styled(BrandingCardGrid)`
  grid-template-columns: repeat(6, max-content);
  justify-content: space-between;
  gap: 4.8rem;

  ${mediaMaxDesktop1024`
    grid-template-columns: repeat(4, max-content);
    gap: 5rem;
  `}

  ${mediaMaxMobile`
    grid-template-columns: repeat(2, max-content);
    gap: 3.6rem;
    justify-content: center;
  `}
`;
