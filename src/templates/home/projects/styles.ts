import { SectionTitle } from "@/components/section-title";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin-top: 10rem;
  padding-inline: var(--default-padding);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  text-align: center;
`;

export const ProjectsPartnersTitle = styled(SectionTitle)`
  text-align: center;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4.8rem;

  > div {
    width: 100%;
  }

  > div:first-child {
    grid-column: 1 / -1;
  }
`;

export const ProjectCard = styled.a<{
  $backgroundImg: string;
  $isFeatured?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 45rem;
  padding: 1.4rem 2.4rem;
  border-radius: 0.8rem;
  overflow: hidden;
  text-decoration: none;
  background-color: ${theme.zenGray};
  background-image:
    linear-gradient(180deg, rgba(2, 2, 2, 0.04) 0%, rgba(2, 2, 2, 0.3) 100%),
    url(${({ $backgroundImg }) => $backgroundImg});
  background-size: cover;
  background-position: center;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-0.8rem);
    box-shadow: 0 2.4rem 6rem rgba(0, 0, 0, 0.28);
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  z-index: 1;
`;

export const ProjectTitle = styled.h3`
  font-size: 3.2rem;
  line-height: 1.2em;
  font-weight: 700;
  color: ${theme.white};
`;

export const ProjectSubtitle = styled.p`
  font-size: 2.4rem;
  line-height: 1.3em;
  font-weight: 400;
  color: ${theme.white};
`;

export const ProjectDescription = styled.p`
  font-size: 2rem;
  line-height: 1.3em;
  font-weight: 400;
  color: ${theme.white};
`;
