"use client";

import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { navbarConstants as C } from "./constants";
import Link from "next/link";

export const Navbar: FC = () => {
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
    <S.Navbar $isScrolled={hasScrolled}>
      <Link href="/">
        <S.Logo src={C.logo.src} alt={C.logo.alt} width={33} height={44} />
      </Link>
      <S.NavbarLinks>
        {C.links.map((link) => (
          <S.NavbarLink key={link.label}>
            <a href={link.href}>{link.label}</a>
          </S.NavbarLink>
        ))}
      </S.NavbarLinks>
      <S.Button
        href={C.contactButton.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{C.contactButton.label}</span>
      </S.Button>
    </S.Navbar>
  );
};
