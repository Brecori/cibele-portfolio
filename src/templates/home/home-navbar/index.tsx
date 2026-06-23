"use client";

import { FC, useEffect, useState } from "react";
import { HamburgerButton } from "@/components/hamburger-button";
import { Navbar } from "@/components/navbar";
import { NavbarMenu } from "@/components/navbar-menu";
import { ResponsiveElement } from "@/lib/ResponsiveElement";
import { homeNavbarConstants as C } from "./constants";
import * as S from "./styles";

export const HomeNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen}>
        <S.Content>
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
                  onClick={() => setIsMenuOpen((previous) => !previous)}
                />
              ),
            }}
          />
        </S.Content>
      </Navbar>

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
