import type { ImageProps } from "next/image";

export type ResponsiveImageProps = ImageProps & {
  width: number;
  height: number;
};
