import api from "../../api";
import { useStore } from "../../store";
import { useLocation } from "react-router";
import { ICharacter } from "../../interfaces";
import { useCallback, useEffect } from "react";

const useHome = () => {
  const [state, dispatch] = useStore();
  const params = new URLSearchParams(useLocation().search);

  // Params
  const character = params.get("character");
  //const comics = params.get("comic");

  const setLoading = useCallback(
    (loading: boolean) => {
      dispatch({ type: "SET_LOADING", payload: { loading } });
    },
    [dispatch]
  );

  const setItems = useCallback(
    (items: ICharacter[]) => {
      dispatch({ type: "ADD_ITEMS", payload: { items } });
    },
    [dispatch]
  );

  useEffect(() => {
    if (character) {
      api
        .getCharactersByName(character)
        .then((results: ICharacter[]) => setItems(results))
        .finally(() => setLoading(false));
    } else if (state.results === undefined) {
      api
        .getRandomCharacter()
        .then((results: ICharacter[]) => setItems(results))
        .finally(() => setLoading(false));
    }
  }, [character, setItems, setLoading, state.results]);

  return {
    state
  };
};

export default useHome;
