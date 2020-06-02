import cx from "classnames";
import { useStore } from "../../store";
import styles from "./Modal.module.css";
import { useHistory } from "react-router";
import { showScroll } from "../../helpers";
import React, { useCallback } from "react";
import { getComicByCharId } from "../../api";
import { ICharacter, IComic, IThumbnail } from "../../interfaces";

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

  const handleClick = (id: number): void => {
    showScroll();
    history.push(`/comic/${id}`);
  };

  React.useEffect(() => {
    if (state.filters[item.id] || state.comics[item.id]) {
      setLoading(false);
    } else {
      getComicByCharId(item.id).then((result: IComic[]) => {
        setComics(item.id, result);
        setLoading(false);
      });
    }
  }, [item, setComics, state.comics, state.filters]);

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
