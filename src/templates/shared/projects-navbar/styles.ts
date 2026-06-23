import { ResponsiveImage } from "@/components/responsive-image";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BrandLink = styled.a`
  justify-self: start;
`;

export const BrandLogo = styled(ResponsiveImage)`
  width: 3.3rem;
  height: 4.4rem;

  ${mediaMaxDesktop1024`
    width: 2.6rem;
  `}

  ${mediaMaxMobile`
    width: 4.4rem;
  `}
`;

export const ProjectLogoSlot = styled.div`
  display: flex;
  justify-content: center;
  min-width: 0;
`;

export const ProjectLogo = styled(ResponsiveImage)<{ $width: number }>`
  width: ${({ $width }) => $width / 10}rem;
  height: auto;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 2rem;

  ${mediaMaxMobile`
    gap: 1.6rem;
    display: none;
  `}
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.3rem);
  }

  ${mediaMaxMobile`
    &:hover {
      transform: none;
    }
  `}
`;

export const SocialIcon = styled(ResponsiveImage)<{ $width: number }>`
  width: ${({ $width }) => $width / 10}rem;

  ${mediaMaxDesktop1024`
    width: ${({ $width }) => $width / 12.5}rem;
  `}

  ${mediaMaxMobile`
    width: ${({ $width }) => $width / 10}rem;
  `}
`;
