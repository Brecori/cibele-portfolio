import { FC } from "react";
import * as S from "./styles";
import { SectionTitleProps } from "./props";

export const SectionTitle: FC<SectionTitleProps> = ({
  children,
  className,
}) => {
  return <S.SectionTitle className={className}>{children}</S.SectionTitle>;
};
