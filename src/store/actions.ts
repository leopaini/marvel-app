import { ICharacter } from "../interfaces";

type Action =
  | {
      type: "ADD_ITEMS";
      payload: {
        items: ICharacter[];
      };
    }
  | {
      type: "SET_LOADING";
      payload: {
        loading: boolean;
      };
    };

export default Action;
