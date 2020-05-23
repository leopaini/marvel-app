import { DefaultTheme } from "styled-components";

export enum ThemeType {
  dark,
  light
}

export interface Theme extends DefaultTheme {
  id: ThemeType;
  color: {
    icon: string;
    font: string;
    navbar: string;
    background: string;
  };
  font: {
    size: string;
  };
}

export const themeLight: Theme = {
  id: ThemeType.light,
  color: {
    icon: "#A8A8A8",
    font: "#505050",
    navbar: "#ffffff",
    background: "#F7F8FA"
  },
  font: {
    size: "1.25rem"
  }
};

export const themeDark: Theme = {
  id: ThemeType.dark,
  color: {
    icon: "#ffffff",
    font: "#ffffff",
    navbar: "#202020",
    background: "#"
  },
  font: { ...themeLight.font }
};

// ,
//   font: {
//     family: "",
//     base: "",
//     small: "",
//     xsmall: "",
//     large: "",
//     xlarge: "",
//     xxlarge: ""
//   }
