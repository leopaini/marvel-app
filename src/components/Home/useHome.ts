import api from "../../api";
import { useStore } from "../../store";
import { useLocation } from "react-router";
import { useCallback, useEffect } from "react";
import { processComicsParams } from "../../helpers";
import { IComic, ICharacter } from "../../interfaces";

const useHome = () => {
  const [state, dispatch] = useStore();
  const params = new URLSearchParams(useLocation().search);

  // Params
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

  const setFilters = useCallback(
    (comic: IComic, filters: string[], characterId: number) => {
      dispatch({ type: "SET_FILTERS", payload: { comic, filters, characterId } });
    },
    [dispatch]
  );

  useEffect(() => {
    if (character) {
      if (comics) {
        const { title, year, issueNumber, filters } = processComicsParams(comics);
        api
          .getComicByParams(title, year, issueNumber)
          .then((comic: IComic) => {
            api
              .getCharacterByComicId(comic.id, character)
              .then((results: ICharacter[]) => {
                if (results.length) {
                  setFilters(comic, filters, results[0].id);
                  setItems(results);
                }
              })
              .finally(() => setLoading(false));
          })
          .catch(() => setLoading(false));
      } else
        api
          .getCharactersByName(character)
          .then((results: ICharacter[]) => setItems(results))
          .finally(() => setLoading(false));
    }
  }, [character, comics, setFilters, setItems, setLoading]);

  useEffect(() => {
    if (!character && state.results === undefined) {
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
