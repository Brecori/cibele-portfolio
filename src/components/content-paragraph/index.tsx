import { FC } from "react";
import * as S from "./styles";
import { ContentParagraphProps } from "./props";

export const ContentParagraph: FC<ContentParagraphProps> = ({
  children,
  className,
}) => {
  return (
    <S.ContentParagraph className={className}>{children}</S.ContentParagraph>
  );
};
