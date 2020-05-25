import React from "react";
import { DefaultTheme } from "styled-components";

// Router
export interface IRouterProps {}

// Pages Components
export interface IHomeProps {}

// Components
export interface INavProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export interface ICardProps {
  item: ICharacter;
}

// Store
export interface IState {
  loading: boolean;
  items: ICharacter[];
}

export interface IProviderProps {
  children: React.ReactNode;
}

// Services API
export interface IResponse {
  config: object;
  data: IDataResponse;
  headers: object;
  status: number;
  statusText: string;
}

export interface IDataResponse {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: IData;
  etag: string;
  status: string;
}

export interface IData {
  count: number;
  limit: number;
  offset: number;
  results: ICharacter[];
  total: number;
}

export interface ICharacter {
  comics: IElements;
  description: string;
  events: IElements;
  id: number;
  modified: Date;
  name: string;
  resourceURI: string;
  series: IElements;
  stories: IElements;
  thumbnail: IThumbnail;
  urls: IUrl[];
}

export interface IElements {
  available: number;
  collectionURI: string;
  items: IItem[];
  returned: number;
}

export interface IItem {
  name: string;
  resourceURI: string;
}

export interface IThumbnail {
  extension: string;
  path: string;
}

export interface IUrl {
  type: string;
  url: string;
}

// Theme
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
    tooltip: {
      background: string;
      font: string;
    };
    card: {
      font: string;
      effect: string;
      background: string;
    };
    message: string;
  };
  font: {
    size: string;
  };
}
