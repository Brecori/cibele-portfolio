import "styled-components";

export const theme = {
  white: "#FFFFFF",
  black: "#000000",
  grayHint: "#e6e6e6",
  smoothGray: "#cccccc",
  argent: "#bfbfbf",
  superGrey: "#999999",
  zenGray: "#737373",
  darkGreyishBrown: "#595959",
  brightGrey: "#ebe7ef",
  fadedWhite: "#e2dbe6",
  chatelle: "#c2b4cc",
  jagger: "#3b0c5b",
  valentinoPurple: "#2f0a49",
  haiti: "#230737",
  jambolam: "#150420",
  sweetGray: "#d9d9d9",
  darkSilver: "#b1b1b1",
  darkBlack: "#020202",
  vividBlack: "#010101",
  kingfisherDaisy: "#3D007A",
  earthBlue: "#3274B7",
  uniformBlue: "#0E2739",
  bustyBlue: "#0B5988",
  geckoGreen: "#3E7D35",
};

// get the color name in https://www.color-name.com

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
