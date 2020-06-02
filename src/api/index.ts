import axios from "axios";
import CryptoJS from "crypto-js";
import { IResponse, ICharacter, IComic } from "../interfaces";

const ts = Date.now();
const apikey = "b1ef90dfe32b98ef73ec0b80881e0cde";
const privateKey = "709ce2f45cef85f454ffcb7a8567e8603157e19d";
const hash = CryptoJS.MD5(ts + privateKey + apikey).toString();

const instance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public"
});

// Characters
export const getCharactersByName = async (name: string): Promise<ICharacter[]> => {
  try {
    const nameStartsWith = `%${name}`;
    const response: IResponse<ICharacter> = await instance.get("characters", {
      params: { nameStartsWith, ts, apikey, hash }
    });
    return response.data.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCharacterByComicId = async (comicId: number, name: string) => {
  try {
    const nameStartsWith = `%${name}`;
    const response: IResponse<ICharacter> = await instance.get(
      `comics/${comicId}/characters`,
      { params: { nameStartsWith, ts, apikey, hash } }
    );
    return response.data.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getRandomCharacter = async (): Promise<ICharacter[]> => {
  try {
    const random = Math.floor(Math.random() * 500);
    const response: IResponse<ICharacter> = await instance.get("characters", {
      params: { limit: 1, offset: random, ts, apikey, hash }
    });
    return response.data.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

// Comics
export const getComicById = async (comicId: string): Promise<IComic[]> => {
  try {
    const response: IResponse<IComic> = await instance.get(`comics/${comicId}`, {
      params: { ts, apikey, hash }
    });
    return response.data.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getComicByCharId = async (characterId: number) => {
  try {
    const response: IResponse<IComic> = await instance.get(
      `characters/${characterId}/comics`,
      { params: { orderBy: "-onsaleDate", ts, apikey, hash } }
    );
    return response.data.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getComicByParams = async (title: string, year: string, issNr: string) => {
  try {
    const startYear = year;
    const issueNumber = issNr;
    const titleStartsWith = title;

    const response: IResponse<IComic> = await instance.get("comics", {
      params: { titleStartsWith, startYear, issueNumber, ts, apikey, hash }
    });
    if (response.data.data.results.length > 0) return response.data.data.results[0];
    else return Promise.reject();
  } catch (error) {
    return Promise.reject();
  }
};

export const getComics = async (comic: string): Promise<IComic[]> => {
  try {
    const titleStartsWith: string = `%${comic}`;
    const response: IResponse<IComic> = await instance.get("comics", {
      params: { titleStartsWith, ts, apikey, hash }
    });
    return response.data.data.results;
  } catch (error) {
    return Promise.reject();
  }
};

const api = {
  getComics,
  getComicById,
  getComicByParams,
  getComicByCharId,
  getRandomCharacter,
  getCharactersByName,
  getCharacterByComicId
};

export default api;
