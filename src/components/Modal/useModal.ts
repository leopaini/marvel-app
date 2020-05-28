import { useStore } from "../../store";
import React, { useCallback } from "react";
import { getComicByCharId } from "../../api";
import { ICharacter, IComic, IThumbnail } from "../../interfaces";

const useModal = (item: ICharacter | IComic) => {
  const [state, dispatch] = useStore();
  const [loading, setLoading] = React.useState(true);

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

  React.useEffect(() => {
    if (!state.comics[item.id])
      getComicByCharId(item.id).then((result: IComic[]) => {
        setComics(item.id, result);
        setLoading(false);
      });
    else setLoading(false);
  }, [item, setComics, state.comics]);

  return {
    state,
    loading,
    getURLImg
  };
};

export default useModal;
