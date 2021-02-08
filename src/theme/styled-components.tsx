import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export interface ThemeInterface {
  sitePrimaryColor: string;
  siteBackgroundColor: string;
  anchorColor: string;
  anchorHoverColor: string;

  scaleP: string;
  scaleH1: string;
  scaleH2: string;
  scaleH3: string;
  scaleH4: string;
  scaleH5: string;
  scaleH6: string;
  extraSmallToSmall: string;
  smallToMedium: string;
  mediumToLarge: string;
  defaultFontSize: string;

  grey: string;
  lightGrey: string;
  darkGrey: string;
  black: string;
  blue: string;
  darkBlue: string;
}

enum colors {
  smoke = "#fbfbfb",
  grey = "#676767",
  lightGrey = "#CCCCCC",
  darkGrey = "#555",
  black = "#333333",
  blue = "rgba(0, 160, 227, 0.05)",
  darkBlue = "rgb(0, 160, 227)"
}

enum scale {
  defaultFontSize = "16px",
  scaleP = "1rem",
  scaleH1 = "2.5rem",
  scaleH2 = "2.25rem",
  scaleH3 = "2rem",
  scaleH4 = "1.875rem",
  scaleH5 = "1.125rem",
  scaleH6 = "1rem",
  extraSmallToSmall = "560px",
  smallToMedium = "768px",
  mediumToLarge = "900px"
}

export const theme = {
  sitePrimaryColor: colors.blue,
  siteBackgroundColor: colors.smoke,
  anchorColor: colors.black,
  anchorHoverColor: colors.darkBlue,

  scaleP: scale.scaleP,
  scaleH1: scale.scaleH1,
  scaleH2: scale.scaleH2,
  scaleH3: scale.scaleH3,
  scaleH4: scale.scaleH4,
  scaleH5: scale.scaleH5,
  scaleH6: scale.scaleH6,
  extraSmallToSmall: scale.extraSmallToSmall,
  smallToMedium: scale.smallToMedium,
  mediumToLarge: scale.mediumToLarge,
  defaultFontSize: scale.defaultFontSize,

  grey: colors.grey,
  lightGrey: colors.lightGrey,
  darkGrey: colors.darkGrey,
  black: colors.black,
  blue: colors.blue,
  darkBlue: colors.darkBlue
};

export { css, keyframes, createGlobalStyle, ThemeProvider };
export default styled;
