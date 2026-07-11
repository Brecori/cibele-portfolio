import { theme } from "@/styles/theme";
import { ResponsiveImage } from "@/components/responsive-image";
import styled from "styled-components";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.8rem;
  min-height: 8.8rem;
  margin-top: 10rem;
  padding-inline: var(--default-padding);
  background-color: ${theme.darkBlack};

  ${mediaMaxMobile`
    flex-direction: column-reverse;
    justify-content: center;
    min-height: auto;
    padding-block: 4.8rem;
  `}
`;

export const Copyright = styled.p`
  font-size: 1.6rem;
  line-height: 1.4em;
  font-weight: 400;
  color: ${theme.white};
  text-align: center;

  ${mediaMaxDesktop1024`
    font-size: 1.4rem;
  `}

  ${mediaMaxMobile`
    max-width: 32rem;
    font-size: 1.8rem;
  `}
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${mediaMaxMobile`
    gap: 3.2rem;
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

export const FooterLogo = styled(ResponsiveImage)`
  width: 14.5rem;

  ${mediaMaxDesktop1024`
    width: 10rem;
  `}

  ${mediaMaxMobile`
    width: 14.5rem;
  `}
`;

export const FooterIcon = styled(ResponsiveImage)<{
  $width: number;
}>`
  width: ${({ $width }) => $width / 10}rem;

  ${mediaMaxDesktop1024`
    width: ${({ $width }) => $width / 12.5}rem;
  `}

  ${mediaMaxMobile`
    width: ${({ $width }) => $width / 10}rem;
  `}
`;

export const MadeByLink = styled.a`
  position: relative;
  transition: color 0.3s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 0.1rem;
    background-color: ${theme.white};
    bottom: -0.2rem;
    transition: background-color 0.25s ease-in-out;
  }

  &::before {
    left: 0;
    width: 100%;
    transition: width 0.3s ease-in-out;
  }

  &::after {
    right: 0;
    width: 0;
    transition: width 0.3s 0.5s ease-in-out;
  }

  &:hover {
    color: ${theme.fadedWhite};

    &::before,
    &::after {
      background-color: ${theme.fadedWhite};
    }

    &::before {
      width: 0;
    }

    &::after {
      width: 100%;
    }
  }
`;
