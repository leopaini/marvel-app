import { useStore } from "../../store";
import { useLocation } from "react-router";
import { ICharacter } from "../../interfaces";
import { useCallback, useEffect } from "react";
import { fetchData, fetchRandom } from "../../api";

const useHome = () => {
  const [state, dispatch] = useStore();

  // Search Params
  const params = new URLSearchParams(useLocation().search);
  const character = params.get("character");
  const comics = params.get("comic");

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
    // TODO comics..
    if (character) {
      fetchData(character)
        .then((results: ICharacter[]) => setItems(results))
        .finally(() => setLoading(false));
    } else {
      fetchRandom()
        .then((results: ICharacter[]) => setItems(results))
        .finally(() => setLoading(false));
    }
  }, [character, comics, setItems, setLoading]);

  return {
    state
  };
};

export default useHome;
