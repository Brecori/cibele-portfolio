"use client";

import { FC } from "react";
import * as S from "./styles";
import { HamburgerButtonProps } from "./props";

export const HamburgerButton: FC<HamburgerButtonProps> = ({
  isOpen,
  ...props
}) => {
  return (
    <S.Button $isOpen={isOpen} {...props}>
      <span />
      <span />
      <span />
    </S.Button>
  );
};
