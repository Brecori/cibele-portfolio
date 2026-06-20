import { BrandingCardGrid } from "@/components/branding-card-grid";
import { SectionTitle } from "@/components/section-title";
import { mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const CertificationsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin-top: 10rem;
  padding-inline: var(--default-padding);
`;

export const CertificationsTitle = styled(SectionTitle)`
  text-align: center;
`;

export const CertificationsGrid = styled(BrandingCardGrid)`
  grid-template-columns: repeat(5, max-content);
  justify-content: space-between;
  row-gap: 3.8rem;

  ${mediaMaxMobile`
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    gap: 3.6rem;
  `}
`;
