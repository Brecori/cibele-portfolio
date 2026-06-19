import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Navbar = styled.nav<{ $isScrolled: boolean }>`
  height: ${({ $isScrolled }) => ($isScrolled ? "6.8rem" : "8.8rem")};
  padding-inline: var(--default-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.darkBlack};
  border-bottom: 0.1rem solid
    ${({ $isScrolled }) =>
      $isScrolled ? theme.fadedWhite + "50" : "transparent"};
  transition:
    height 0.3s ease-in-out,
    background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
  z-index: 10;
`;

export const Logo = styled(Image)`
  width: 3.3rem;
  height: 4.4rem;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export const NavbarLink = styled.li`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${theme.white};
  line-height: 1.4em;
  transition:
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0.1rem;
    background-color: ${theme.white};
    bottom: -0.4rem;
    transition: width 0.25s 0.15s ease-in-out;
  }

  &::before {
    right: 0;
  }

  &::after {
    left: 0;
  }

  &:hover {
    transform: translateY(-0.2rem);
  }

  &:hover::after,
  &:hover::before {
    width: 50%;
  }
`;

export const Button = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.4em;
  color: ${theme.white};
  background-color: transparent;
  padding: 0.9rem 1.6rem;
  border-radius: 0.8rem;
  transition: color 0.3s ease-in-out;
  border: 0.1rem solid ${theme.white};
  position: relative;
  overflow: hidden;
  isolation: isolate;

  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0;
    border-radius: 0.8rem;
    background-color: ${theme.white};
    bottom: 0;
    left: 0;
    transition: height 0.3s ease;
    z-index: 0;
  }

  &:hover {
    color: ${theme.darkBlack};

    &::before {
      height: 100%;
    }
  }
`;
