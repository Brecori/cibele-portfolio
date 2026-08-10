import styled from "styled-components";
import { theme } from "@/styles/theme";
import { mediaMaxMobile } from "@/lib/media-query";

export const Menu = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 10rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: ${theme.darkBlack};
  padding: var(--default-padding);
  transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition:
    pointer-events 0.4s ease-in-out,
    transform 0.4s ease-in-out;

  ${mediaMaxMobile`
    display: block;
  `}
`;
