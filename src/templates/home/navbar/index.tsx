"use client";

import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { navbarConstants as C } from "./constants";
import { ResponsiveElement } from "@/lib/ResponsiveElement";
import { HamburgerButton } from "@/components/hamburger-button";
import { NavbarMenu } from "@/components/navbar-menu";

export const Navbar: FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const handleResive = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResive);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResive);
    };
  }, [isMenuOpen]);

  return (
    <>
      <S.Navbar $isScrolled={hasScrolled} $isMenuOpen={isMenuOpen}>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          <ResponsiveElement
            content={
              <S.Logo
                src={C.logo.src}
                alt={C.logo.alt}
                width={33}
                height={44}
              />
            }
            breakpoints={{
              mobile: (
                <S.Logo
                  src={C.logo.mobileSrc}
                  alt={C.logo.alt}
                  width={145}
                  height={44}
                />
              ),
            }}
          />
        </a>
        <ResponsiveElement
          content={
            <>
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
            </>
          }
          breakpoints={{
            mobile: (
              <HamburgerButton
                type="button"
                isOpen={isMenuOpen}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            ),
          }}
        />
      </S.Navbar>
      <ResponsiveElement
        content={null}
        breakpoints={{
          mobile: (
            <NavbarMenu isOpen={isMenuOpen}>
              <S.NavbarMenuContainer>
                <S.NavbarLinks>
                  {C.links.map((link) => (
                    <S.NavbarLink key={link.label}>
                      <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                        {link.label}
                      </a>
                    </S.NavbarLink>
                  ))}
                </S.NavbarLinks>
                <S.Button
                  href={C.contactButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{C.contactButton.label}</span>
                </S.Button>
              </S.NavbarMenuContainer>
            </NavbarMenu>
          ),
        }}
      />
    </>
  );
};
