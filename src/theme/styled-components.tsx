import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export interface ThemeInterface {
  primaryThemeColor: string;
  primaryDarkThemeColor: string;
  primaryLightThemeColor: string;
  secondaryThemeColor: string;
  navigationTextColor: string;
  navigationIconColor: string;
  landingHeroTextColor: string;
  cardBackgroundColor: string;

  siteBackgroundColor: string;

  scaleP: string;
  scaleH1: string;
  scaleH2: string;
  scaleH3: string;
  scaleH4: string;
  scaleH5: string;
  scaleH6: string;
  exToSm: string;
  smToMd: string;
  mdToLg: string;
  defaultFontSize: string;

  white: string;
  grey: string;
  lightGrey: string;
  darkGrey: string;
  black: string;
}

 enum colors {
  white = "#fff",
  grey = "#676767",
  lightGrey = "#CCCCCC",
  darkGrey = "#555",
  mustard = "#FFA816",
  darkMustard = "#c97e00",
  lightMustard = "#fff4e3",
  smoke = "#f5f5f5",
  black = "#333333"
}

enum scale {
  defaultFontSize = "16px",
  maxPageWidth = "75rem",
  footerMaxWidth = "300px",
  scaleP = "1rem",
  scaleH1 = "2.5rem",
  scaleH2 = "2.25rem",
  scaleH3 = "2rem",
  scaleH4 = "1.875rem",
  scaleH5 = "1.125rem",
  scaleH6 = "1rem",
  exToSm = "560px",
  smToMd = "768px",
  mdToLg = "900px"
}

export const theme = {
  primaryThemeColor: colors.mustard,
  primaryDarkThemeColor: colors.darkMustard,
  primaryLightThemeColor: colors.lightMustard,
  secondaryThemeColor: colors.mustard,
  navigationTextColor: colors.white,
  navigationIconColor: colors.white,
  landingHeroTextColor: colors.white,
  cardBackgroundColor: colors.white,

  siteBackgroundColor: colors.smoke,

  scaleP: scale.scaleP,
  scaleH1: scale.scaleH1,
  scaleH2: scale.scaleH2,
  scaleH3: scale.scaleH3,
  scaleH4: scale.scaleH4,
  scaleH5: scale.scaleH5,
  scaleH6: scale.scaleH6,
  exToSm: scale.exToSm,
  smToMd: scale.smToMd,
  mdToLg: scale.mdToLg,
  defaultFontSize: scale.defaultFontSize,

  white: colors.white,
  grey: colors.grey,
  lightGrey: colors.lightGrey,
  darkGrey: colors.darkGrey,
  black: colors.black
};

export { css, keyframes, createGlobalStyle, ThemeProvider };
export default styled;
