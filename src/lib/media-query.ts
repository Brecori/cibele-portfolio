import { viewportsBase } from "@/constants/viewport-base";
import { css } from "styled-components";
import type { Interpolation, RuleSet } from "styled-components";

type MediaQuery = <Props extends object = object>(
  styles: TemplateStringsArray,
  ...interpolations: Interpolation<Props>[]
) => RuleSet<Props>;

const createMediaMax =
  (width: number): MediaQuery =>
  <Props extends object = object>(
    styles: TemplateStringsArray,
    ...interpolations: Interpolation<Props>[]
  ) => {
    const styleBlock = css(
      styles,
      ...(interpolations as unknown as Interpolation<object>[])
    ) as unknown as Interpolation<object>;

    return css`
      @media (max-width: ${width}px) {
        ${styleBlock}
      }
    ` as RuleSet<Props>;
  };

const createMediaQuery =
  (mediaQuery: string): MediaQuery =>
  <Props extends object = object>(
    styles: TemplateStringsArray,
    ...interpolations: Interpolation<Props>[]
  ) => {
    const styleBlock = css(
      styles,
      ...(interpolations as unknown as Interpolation<object>[])
    ) as unknown as Interpolation<object>;

    return css`
      @media ${mediaQuery} {
        ${styleBlock}
      }
    ` as RuleSet<Props>;
  };

export const mediaMaxDesktop1024 = createMediaMax(
  viewportsBase.desktop1024.width,
);

export const mediaMaxIpadVertical = createMediaQuery(
  `(max-width: ${viewportsBase.ipadVertical.width}px) and (orientation: portrait)`,
);

export const mediaMaxMobile = createMediaMax(viewportsBase.mobile.width);
