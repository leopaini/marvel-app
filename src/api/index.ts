import axios from "axios";
import CryptoJS from "crypto-js";
import { IResponse, ICharacter, IComic } from "../interfaces";

const ts = Date.now();
const publicKey = "b1ef90dfe32b98ef73ec0b80881e0cde";
const privateKey = "709ce2f45cef85f454ffcb7a8567e8603157e19d";
const hash = CryptoJS.MD5(ts + privateKey + publicKey);

const instance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public"
});

export const fetchData = async (name: string): Promise<ICharacter[]> => {
  try {
    const searchTerm: string = `%${name}`;
    const response: IResponse<ICharacter> = await instance.get("characters", {
      params: { ts, apikey: publicKey, hash: hash.toString(), nameStartsWith: searchTerm }
    });
    return response.data.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchRandom = async (): Promise<ICharacter[]> => {
  try {
    const random = Math.floor(Math.random() * 500);
    const response: IResponse<ICharacter> = await instance.get("characters", {
      params: { limit: 1, offset: random, ts, apikey: publicKey, hash: hash.toString() }
    });
    return response.data.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getComicById = async (comicId: string): Promise<IComic[]> => {
  try {
    const response: IResponse<IComic> = await instance.get(`comics/${comicId}`, {
      params: { ts, apikey: publicKey, hash: hash.toString() }
    });
    return response.data.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getComicByParams = async (title: string, year: string, issueNr: string) => {
  try {
    const response: IResponse<IComic> = await instance.get("comics", {
      params: {
        titleStartsWith: title,
        startYear: year,
        issueNumber: issueNr,
        ts,
        apikey: publicKey,
        hash: hash.toString()
      }
    });
    return response.data.data.results;
  } catch (error) {
    return Promise.reject();
  }
};

export const getComics = async (comic: string): Promise<IComic[]> => {
  try {
    const search: string = `%${comic}`;
    const response: IResponse<IComic> = await instance.get("comics", {
      params: { titleStartsWith: search, ts, apikey: publicKey, hash: hash.toString() }
    });
    return response.data.data.results;
  } catch (error) {
    return Promise.reject();
  }
};
