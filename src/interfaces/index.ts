import React from "react";
import { DefaultTheme } from "styled-components";

// Router
export interface IRouterProps {}

// Pages Components
export interface IHomeProps {}
export interface IComicProps {}

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
  comics: IComicArray;
}

export interface IProviderProps {
  children: React.ReactNode;
}

// Services API
export interface IResponse<T> {
  config: object;
  headers: object;
  status: number;
  statusText: string;
  data: IDataResponse<T>;
}

export interface IDataResponse<T> {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: IData<T>;
  etag: string;
  status: string;
}

export interface IData<T> {
  count: number;
  limit: number;
  offset: number;
  results: T[];
  total: number;
}

export interface IComicArray {
  [index: string]: IComic;
}

export interface IComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string | null;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: [];
  resourceURI: string;
  urls: IUrl[];
  series: IItem[];
  variants: [];
  collections: IItem[];
  collectedIssues: [];
  dates: IDate[];
  prices: IPrice[];
  thumbnail: IThumbnail;
  images: IThumbnail[];
  creators: ICreators;
  characters: IElements;
  stories: IElements;
  events: IElements;
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

export interface ICreators {
  available: number;
  collectionURI: string;
  items: ICreatorItem[];
  returned: number;
}

export interface IItem {
  name: string;
  resourceURI: string;
}

export interface ICreatorItem {
  name: string;
  role: string;
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

export interface IDate {
  type: string;
  date: Date;
}

export interface IPrice {
  type: string;
  price: number;
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
    comic: {
      font: string;
    };
  };
  font: {
    size: string;
  };
}
