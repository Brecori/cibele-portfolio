import { mediaMaxMobile } from "@/lib/media-query";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Navbar = styled.nav<{
  $isScrolled: boolean;
  $isMenuOpen: boolean;
}>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  height: ${({ $isScrolled }) => ($isScrolled ? "6.8rem" : "8.8rem")};
  padding-inline: var(--default-padding);
  background-color: ${theme.darkBlack};
  border-bottom: 0.1rem solid
    ${({ $isScrolled, $isMenuOpen }) =>
      $isScrolled || $isMenuOpen ? theme.fadedWhite + "50" : "transparent"};
  transition:
    height 0.3s ease-in-out,
    background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  ${mediaMaxMobile`
    height: 10rem;
  `}
`;
