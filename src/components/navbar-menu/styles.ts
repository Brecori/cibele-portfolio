import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Menu = styled.div<{ $isOpen: boolean }>`
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
    pointer-events 0.7s ease-in-out,
    transform 0.7s ease-in-out;
`;
