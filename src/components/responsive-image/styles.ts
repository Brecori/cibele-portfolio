import Image from "next/image";
import styled from "styled-components";

export const ResponsiveImage = styled(Image)<{
  $width: number;
  $height: number;
}>`
  width: ${({ $width }) => $width / 10}rem;
  height: ${({ $height }) => $height / 10}rem;
`;
