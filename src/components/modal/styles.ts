import { mediaMaxMobile } from "@/lib/media-query";
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

  ${mediaMaxMobile`
  background-color: ${theme.darkBlack};
  `}
`;

export const Container = styled.div`
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 3.2rem;
  right: 3.2rem;
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
