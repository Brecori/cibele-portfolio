"use client";

import { FC, useEffect, useState } from "react";
import { NavbarProps } from "./props";
import * as S from "./styles";

export const Navbar: FC<NavbarProps> = ({
  children,
  isMenuOpen = false,
  ...props
}) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Navbar
      $isScrolled={hasScrolled}
      $isMenuOpen={isMenuOpen}
      {...props}
    >
      {children}
    </S.Navbar>
  );
};
