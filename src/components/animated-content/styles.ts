import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";
import styled from "styled-components";
import { AnimatedContentDirection } from "./props";

const getTransform = (
  hasAnimated: boolean,
  direction: AnimatedContentDirection,
  offset: string,
) => {
  if (hasAnimated) return "none";

  switch (direction) {
    case "down":
      return `translateY(-${offset})`;
    case "left":
      return `translateX(${offset})`;
    case "right":
      return `translateX(-${offset})`;
    case "up":
    default:
      return `translateY(${offset})`;
  }
};

export const Container = styled.div<{
  $hasAnimated: boolean;
  $direction: AnimatedContentDirection;
}>`
  position: relative;

  > * {
    transform: ${({ $hasAnimated, $direction }) =>
      getTransform($hasAnimated, $direction, "3rem")};
    opacity: ${({ $hasAnimated }) => ($hasAnimated ? 1 : 0)};

    ${mediaMaxDesktop1024`
      transform: ${({ $hasAnimated, $direction }) =>
        getTransform($hasAnimated, $direction, "1.3rem")};
    `}

    ${mediaMaxMobile`
      transform: ${({ $hasAnimated, $direction }) =>
        getTransform($hasAnimated, $direction, "1rem")};
    `}
  }
`;

export const Item = styled.div``;
