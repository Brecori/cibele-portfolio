"use client";

import { FC, MouseEvent, useEffect } from "react";
import { ModalProps } from "./props";
import * as S from "./styles";

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
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

  if (!isOpen) {
    return null;
  }

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <S.Overlay onClick={onClose} aria-modal="true" role="dialog">
      <S.Content onClick={handleContentClick}>
        <S.CloseButton
          type="button"
          aria-label="Fechar modal"
          onClick={onClose}
        >
          X
        </S.CloseButton>
        {children}
      </S.Content>
    </S.Overlay>
  );
};
