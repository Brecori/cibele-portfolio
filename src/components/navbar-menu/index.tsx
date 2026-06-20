"use client";

import { FC } from "react";
import * as S from "./styles";
import { NavbarMenuProps } from "./props";

export const NavbarMenu: FC<NavbarMenuProps> = ({
  isOpen,
  children,
  ...props
}) => {
  return (
    <S.Menu $isOpen={isOpen} {...props}>
      {children}
    </S.Menu>
  );
};
