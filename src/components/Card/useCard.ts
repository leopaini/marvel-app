import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "../../store";
import { isCharacter } from "../../helpers";
import { showScroll, hideScroll } from "../../helpers";
import { IThumbnail, ICharacter, IComic } from "../../interfaces";

const useCard = (item: ICharacter | IComic) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const getImgPath = (thumbnail: IThumbnail): string => {
    return `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
  };

  const handleOpen = (): void => {
    if (!isCharacter(item)) history.push(`/comic/${item.id}`);
    else {
      hideScroll();
      setOpen(true);
    }
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
    open,
    handleFav,
    getImgPath,
    handleOpen,
    handleClose,
    handleRemoveFav
  };
};

export default useCard;
