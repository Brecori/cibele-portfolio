import { ResponsiveImage } from "@/components/responsive-image";
import styled from "styled-components";

export const VisualExperiencesSection = styled.section`
  display: flex;
  padding-inline: var(--default-padding);
  margin-top: 10rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15rem;
`;

export const VisualImage = styled(ResponsiveImage)`
  border-radius: 0.8rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
