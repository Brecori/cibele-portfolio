import { SectionTitle } from "@/components/section-title";
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
