import React from "react";
import { useStore } from "../../store";
import { showScroll, hideScroll } from "../../helpers";
import { IThumbnail, ICharacter, IComic } from "../../interfaces";

const useCard = (item: ICharacter | IComic) => {
  const [state, dispatch] = useStore();
  const [open, setOpen] = React.useState(false);
  const fav = state.favorites[item.id] ? true : false;

  const getImgPath = (thumbnail: IThumbnail): string => {
    return `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
  };

  const handleOpen = (): void => {
    hideScroll();
    setOpen(true);
  };

  const handleClose = (): void => {
    showScroll();
    setOpen(false);
  };

  const handleFav = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    dispatch({ type: "ADD_FAV", payload: { item } });
  };

  const handleRemoveFav = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    dispatch({ type: "REM_FAV", payload: { item } });
  };

  return {
    fav,
    open,
    handleFav,
    getImgPath,
    handleOpen,
    handleClose,
    handleRemoveFav
  };
};

export default useCard;
