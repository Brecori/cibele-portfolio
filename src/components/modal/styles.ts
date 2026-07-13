import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0 0 0 / 0.8);
  opacity: 0;
  visibility: hidden;

  ${mediaMaxMobile`
    background-color: rgb(0 0 0 / 0.9);
  `}
`;

export const Container = styled.div`
  position: relative;
  max-width: 120rem;
  max-height: 90vh;
  width: 100%;
  height: 100%;

  ${mediaMaxDesktop1024`
    max-width: 72rem;
  `}

  ${mediaMaxMobile`
    max-width: calc(100% - 8rem);
    max-height: 100%;
  `}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 4rem;
  right: 4rem;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgb(255 255 255 / 0.12);
  color: ${theme.white};
  font-size: 2rem;
  font-weight: 700;
  transition:
    transform 0.3s ease-in-out,
    background-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: rgb(255 255 255 / 0.2);
  }

  ${mediaMaxMobile`
    width: 3.6rem;
    height: 3.6rem;
  `}
`;
