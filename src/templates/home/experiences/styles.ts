import { SectionTitle } from "@/components/section-title";
import styled from "styled-components";

export const ExperiencesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin-top: 10rem;
  padding-inline: 15rem;
`;

export const ExperiencesTitle = styled(SectionTitle)`
  text-align: center;
`;

export const ExperiencesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4.8rem;
  justify-content: center;
  flex-wrap: wrap;
`;
