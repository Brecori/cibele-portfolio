import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled(Image)`
  width: 3.3rem;
  height: 4.4rem;

  ${mediaMaxDesktop1024`
    width: 2.6rem;
  `}

  ${mediaMaxMobile`
    width: 14rem;
  `}
`;

export const NavbarLinks = styled.ul`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  ${mediaMaxMobile`
    flex-direction: column;
    gap: 6rem;
    align-items: flex-start;
  `}
`;

export const NavbarLink = styled.li`
  position: relative;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.4em;
  color: ${theme.white};
  transition:
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: -0.4rem;
    width: 0;
    height: 0.1rem;
    background-color: ${theme.white};
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

  ${mediaMaxDesktop1024`
    font-size: 1.6rem;
  `}

  ${mediaMaxMobile`
    font-size: 4rem;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 700;

    &::after, &::before {
      width: 50%;
    }

    &:hover {
      transform: translateY(0);
    }
  `}
`;

export const Button = styled.a`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 0.9rem 1.6rem;
  border: 0.1rem solid ${theme.white};
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.4em;
  color: ${theme.white};
  background-color: transparent;
  transition: color 0.3s ease-in-out;

  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 0;
    border-radius: 0.8rem;
    background-color: ${theme.white};
    transition: height 0.3s ease;
  }

  &:hover {
    color: ${theme.darkBlack};

    &::before {
      height: 100%;
    }
  }

  ${mediaMaxDesktop1024`
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  `}

  ${mediaMaxMobile`
    font-size: 3.2rem;
    padding: 1.2rem 2.4rem;
    text-align: center;
  `}
`;

export const NavbarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-block: 8rem 4rem;
`;
