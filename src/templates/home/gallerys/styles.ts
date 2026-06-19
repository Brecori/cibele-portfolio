import { SectionTitle } from "@/components/section-title";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const GallerysSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin-top: 10rem;
  padding-inline: var(--default-padding);
`;

export const GallerysTitle = styled(SectionTitle)`
  text-align: center;
`;

export const GallerysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 5.2rem;

  > div {
    width: 100%;
  }
`;

export const GalleryCard = styled.a<{ $backgroundImg: string }>`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 2.4rem;
  border-radius: 0.8rem;
  overflow: hidden;
  text-decoration: none;
  background-color: ${theme.zenGray};
  background-image:
    linear-gradient(180deg, rgba(2, 2, 2, 0.02) 0%, rgba(2, 2, 2, 0.18) 100%),
    url(${({ $backgroundImg }) => $backgroundImg});
  background-size: cover;
  background-position: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-0.8rem);
  }
`;

export const GalleryTitle = styled.h3`
  position: relative;
  z-index: 1;
  font-size: 3.2rem;
  line-height: 1.2em;
  font-weight: 700;
  color: ${theme.white};
`;
