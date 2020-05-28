import React from "react";
import cx from "classnames";
import Modal from "../Modal";
import useCard from "./useCard";
import { isCharacter } from "../../helpers";
import { ICardProps } from "../../interfaces";

// Styles
import styles from "./Card.module.css";
import { Tooltip } from "../../elements";
import { Thumb, Info, Name } from "./styles";

const Card: React.SFC<ICardProps> = ({ item }) => {
  const {
    open,
    fav,
    handleFav,
    getImgPath,
    handleOpen,
    handleClose,
    handleRemoveFav
  } = useCard(item);

  return (
    <>
      {open && <Modal item={item} closeModal={handleClose} />}

      <div className={styles.card} onClick={handleOpen}>
        <Thumb className={styles.thumb}>
          <>
            {fav ? (
              <i
                className={cx(styles.icon, "fas fa-star")}
                onClick={e => handleRemoveFav(e)}></i>
            ) : (
              <i
                className={cx(styles.icon, "far fa-star")}
                onClick={e => handleFav(e)}></i>
            )}
            <Tooltip className={styles.tooltip}>
              {fav ? "Remove from favorites" : "Add to favorites"}
            </Tooltip>
          </>

          <img
            className={styles.image}
            src={getImgPath(item.thumbnail)}
            alt={isCharacter(item) ? item.name : item.title}
          />
        </Thumb>
        <Info className={styles.info}>
          <Name className={styles.name}>
            {isCharacter(item) ? item.name : item.title}
          </Name>
        </Info>
      </div>
    </>
  );
};

export default Card;
