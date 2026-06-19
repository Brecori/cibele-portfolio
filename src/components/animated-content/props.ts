import { ReactNode } from "react";

export type AnimatedContentDirection = "up" | "down" | "left" | "right";

export interface AnimatedContentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  startPosition?: number;
  direction?: AnimatedContentDirection;
  preventReAnimate?: boolean;
  isMobile?: boolean;
  onAnimationComplete?: () => void;
}
