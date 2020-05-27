import { Theme, ThemeType } from "../interfaces";

export const themeLight: Theme = {
  id: ThemeType.light,
  color: {
    icon: "#A8A8A8",
    font: "#505050",
    navbar: "#ffffff",
    background: "#F7F8FA",
    tooltip: {
      background: "#202020",
      font: "#ffffff"
    },
    card: {
      font: "#ffffff",
      effect: "#e62429",
      background: "#202020"
    },
    message: "#202020",
    comic: {
      font: "#3E3E3E"
    }
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
    background: "#333333",
    tooltip: {
      background: "#ffffff",
      font: "#202020"
    },
    card: {
      font: "#202020",
      effect: "#e62429",
      background: "#F7F8FA"
    },
    message: "#ffffff",
    comic: {
      font: "#F7F8FA"
    }
  },
  font: { ...themeLight.font }
};
