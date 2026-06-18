"use client";

import { Children, FC } from "react";
import { useAnimatedContentAnimations } from "./animations";
import { AnimatedContentProps } from "./props";
import * as S from "./styles";

const AnimatedContent: FC<AnimatedContentProps> = ({
  children,
  className,
  delay,
  duration,
  stagger,
  startPosition,
  preventReAnimate,
  isMobile,
  onAnimationComplete,
}) => {
  const { containerRef, setItemRefs, hasAnimated } =
    useAnimatedContentAnimations(
      delay,
      duration,
      stagger,
      startPosition,
      preventReAnimate,
      isMobile,
      onAnimationComplete,
    );

  const childrenArray = Children.toArray(children);

  return (
    <S.Container
      ref={containerRef}
      className={className}
      $hasAnimated={hasAnimated}
    >
      {childrenArray.map((child, i) => (
        <S.Item ref={setItemRefs(i)} key={i}>
          {child}
        </S.Item>
      ))}
    </S.Container>
  );
};

export default AnimatedContent;
