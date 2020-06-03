import cx from "classnames";
import { useStore } from "../../store";
import styles from "./Modal.module.css";
import { useHistory } from "react-router";
import { showScroll } from "../../helpers";
import React, { useCallback } from "react";
import { ICharacter, IComic, IThumbnail, IResponse } from "../../interfaces";
import { getComicByCharId, getAllComicsByFilters } from "../../api";

const useModal = (item: ICharacter | IComic) => {
  const history = useHistory();
  const [state, dispatch] = useStore();
  const [loading, setLoading] = React.useState(true);

  const items = state.filters[item.id]
    ? state.filters[item.id].comics
    : state.comics[item.id];

  const modalClass = cx(styles.modal, items && !loading ? styles.open : "");

  const getURLImg = (thumbnail: IThumbnail): string => {
    return `${thumbnail.path}/portrait_medium.${thumbnail.extension}`;
  };

  const setComics = useCallback(
    (id: number, items: IComic[]) => {
      const characterId = id.toString();
      dispatch({ type: "ADD_COMICS", payload: { characterId, items } });
    },
    [dispatch]
  );

  const setFilters = useCallback(
    (characterId: number, comics: IComic[]) => {
      dispatch({ type: "ADD_FILTER_COMICS", payload: { characterId, comics } });
    },
    [dispatch]
  );

  // Case more than one comic in url query string.
  const checkFilters = useCallback(async () => {
    const favs = state.filters[item.id];
    if (favs.filters.length + 1 !== favs.comics.length) {
      getAllComicsByFilters(favs.filters)
        .then((response: IResponse<IComic>[]) => {
          const comics = response.map((el: IResponse<IComic>) => el.data.data.results[0]);
          setFilters(item.id, comics);
        })
        .finally(() => setLoading(false));
    } else setLoading(false);
  }, [item.id, setFilters, state.filters]);

  const handleClick = (id: number): void => {
    showScroll();
    history.push(`/comic/${id}`);
  };

  React.useEffect(() => {
    if (state.comics[item.id] || state.filters[item.id]) {
      if (state.filters[item.id]) checkFilters();
      else setLoading(false);
    } else {
      getComicByCharId(item.id).then((result: IComic[]) => {
        setComics(item.id, result);
        setLoading(false);
      });
    }
  }, [checkFilters, item, setComics, state.comics, state.filters]);

  return {
    items,
    state,
    loading,
    getURLImg,
    modalClass,
    handleClick
  };
};

export default useModal;
