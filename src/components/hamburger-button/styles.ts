import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";

const menuKeyframes = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(1.2rem) rotate(0);
  }
  100% {
    transform: translateY(1.2rem) rotate(45deg);
  }
`;

const menuKeyframesReverse = keyframes`
  0% {
    transform: translateY(1.2rem) rotate(45deg);
  }
  50% {
    transform: translateY(1.2rem) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

const menuKeyframesBottom = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1.2rem) rotate(0);
  }
  100% {
    transform: translateY(-1.2rem) rotate(-45deg);
  }
`;

const menuKeyframesBottomReverse = keyframes`
  0% {
    transform: translateY(-1.2rem) rotate(-45deg);
  }
  50% {
    transform: translateY(-1.2rem) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

export const Button = styled.button<{ $isOpen: boolean }>`
  position: relative;
  width: 4rem;
  height: 2.8rem;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 0.3rem;
    border-radius: 99rem;
    background-color: ${theme.white};
    animation-duration: 0.7s;
    animation-timing-function: cubic-bezier(0.5, 0.2, 0.2, 1.01);
    animation-fill-mode: forwards;
    transform-origin: center;
  }

  span:nth-child(1) {
    top: 0;
    animation-name: ${({ $isOpen }) =>
      $isOpen ? menuKeyframes : menuKeyframesReverse};
  }

  span:nth-child(2) {
    top: 1.2rem;
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    transition: opacity 0.3s cubic-bezier(0.5, 0.2, 0.2, 1.01) 0.3s;
  }

  span:nth-child(3) {
    top: 2.4rem;
    animation-name: ${({ $isOpen }) =>
      $isOpen ? menuKeyframesBottom : menuKeyframesBottomReverse};
  }
`;
