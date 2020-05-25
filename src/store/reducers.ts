import Action from "./actions";
import { IState } from "../interfaces";

function reducers(state: IState, action: Action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload.loading };

    case "ADD_ITEMS":
      return { ...state, items: action.payload.items };

    default:
      return state;
  }
}

export default reducers;
