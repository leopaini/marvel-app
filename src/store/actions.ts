import { ICharacter, IComic, IIndexItem } from "../interfaces";

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
    }
  | {
      type: "ADD_COMICS";
      payload: {
        characterId: string;
        items: IComic[];
      };
    }
  | {
      type: "ADD_FAV";
      payload: {
        item: ICharacter | IComic;
      };
    }
  | {
      type: "REM_FAV";
      payload: {
        item: ICharacter | IComic;
      };
    }
  | {
      type: "ADD_FAVS_FROM_LS";
      payload: {
        items: IIndexItem;
      };
    };

export default Action;
