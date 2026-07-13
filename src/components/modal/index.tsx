"use client";

import { FC, MouseEvent, useEffect, useRef } from "react";
import { ModalProps } from "./props";
import * as S from "./styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!modalRef.current) {
      return;
    }

    gsap.to(modalRef.current, {
      autoAlpha: isOpen ? 1 : 0,
      pointerEvents: isOpen ? "auto" : "none",
      duration: 0.3,
    });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <S.Overlay onClick={onClose} aria-modal="true" role="dialog" ref={modalRef}>
      <S.CloseButton type="button" aria-label="Fechar modal" onClick={onClose}>
        X
      </S.CloseButton>
      <S.Container onClick={handleContentClick}>{children}</S.Container>
    </S.Overlay>
  );
};
