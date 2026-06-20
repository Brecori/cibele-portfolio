import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { ResponsiveImage } from "@/components/responsive-image";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const BrandingCard = styled.div`
  width: 19.2rem;
  height: 10.08rem;
  border-radius: 0.8rem;
  background-color: ${theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);

  &:hover {
    transform: translateY(-0.5rem);
  }

  ${mediaMaxDesktop1024`
    width: 14.4rem;
    height: 7.56rem;
  `}

  ${mediaMaxMobile`
    width: 19.2rem;
    height: 10.08rem;
  `}
`;

export const BrandingCardImage = styled(ResponsiveImage)<{
  $width: number;
  $mobileWidth?: number;
}>`
  width: ${({ $width }) => $width / 10}rem;

  ${mediaMaxDesktop1024`
    width: ${({ $mobileWidth, $width }) => ($mobileWidth ?? $width) / 10}rem;
  `}
`;
