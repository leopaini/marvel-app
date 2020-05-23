import React from "react";
import { Theme } from "../theme";

// Router
export interface IRouterProps {}

// Pages Components
export interface IHomeProps {}

// Components
export interface INavProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}
