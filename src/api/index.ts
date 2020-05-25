import axios from "axios";
import CryptoJS from "crypto-js";
import { IResponse, ICharacter } from "../interfaces";

const ts = Date.now();
const publicKey = "b1ef90dfe32b98ef73ec0b80881e0cde";
const privateKey = "709ce2f45cef85f454ffcb7a8567e8603157e19d";
const hash = CryptoJS.MD5(ts + privateKey + publicKey);

const instance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public"
});

export const fetchData = async (name: string): Promise<ICharacter[]> => {
  try {
    const response: IResponse = await instance.get("characters", {
      params: { nameStartsWith: name, ts, apikey: publicKey, hash: hash.toString() }
    });

    return response.data.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchRandom = async (): Promise<ICharacter[]> => {
  try {
    const random = Math.floor(Math.random() * 500);
    const response: IResponse = await instance.get("characters", {
      params: { limit: 1, offset: random, ts, apikey: publicKey, hash: hash.toString() }
    });

    return response.data.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};
