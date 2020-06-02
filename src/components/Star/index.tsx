import React from "react";
import cx from "classnames";
import { useStore } from "../../store";
import { IStarProps } from "../../interfaces";

// Styles
import styles from "./Star.module.css";
import { Tooltip } from "../../elements";

const Star: React.SFC<IStarProps> = ({ item }) => {
  const [state, dispatch] = useStore();
  const added = state.favorites[item.id] ? true : false;

  const handleAdd = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    dispatch({ type: "ADD_FAV", payload: { item } });
  };

  const handleRemove = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    e.stopPropagation();
    dispatch({ type: "REM_FAV", payload: { item } });
  };

  return (
    <>
      {added ? (
        <i className={cx(styles.icon, "fas fa-star")} onClick={handleRemove}></i>
      ) : (
        <i className={cx(styles.icon, "far fa-star")} onClick={handleAdd}></i>
      )}

      <Tooltip className={styles.tooltip}>
        {added ? "Remove from favorites" : "Add to favorites"}
      </Tooltip>
    </>
  );
};

export default Star;
