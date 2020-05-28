import Action from "./actions";
import { IState } from "../interfaces";

function reducers(state: IState, action: Action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload.loading };

    case "ADD_ITEMS":
      return {
        ...state,
        items: action.payload.items,
        results: action.payload.items.length
      };

    case "ADD_COMICS":
      const comics = { ...state.comics };
      comics[action.payload.characterId] = action.payload.items;
      return { ...state, comics };

    case "ADD_FAV": {
      const favorites = { ...state.favorites };
      const id = action.payload.item.id.toString();
      favorites[id] = action.payload.item;

      localStorage.setItem("favorites", JSON.stringify(favorites));
      return { ...state, favorites };
    }

    case "REM_FAV": {
      const favorites = { ...state.favorites };
      const id = action.payload.item.id.toString();
      delete favorites[id];

      localStorage.setItem("favorites", JSON.stringify(favorites));
      return { ...state, favorites };
    }

    case "ADD_FAVS_FROM_LS": {
      const favorites = { ...action.payload.items };
      return { ...state, favorites };
    }

    default:
      return state;
  }
}

export default reducers;
