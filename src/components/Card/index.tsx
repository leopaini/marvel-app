import React from "react";
import useCard from "./useCard";
import { Star, Modal } from "../";
import { isCharacter } from "../../helpers";
import { ICardProps } from "../../interfaces";

// Styles
import styles from "./Card.module.css";
import { Thumb, Info, Name } from "./styles";

const Card: React.SFC<ICardProps> = ({ item }) => {
  const { open, getImgPath, handleOpen, handleClose } = useCard(item);

  return (
    <>
      {open && <Modal item={item} closeModal={handleClose} />}

      <div className={styles.card} onClick={handleOpen}>
        <Thumb className={styles.thumb}>
          <span className={styles.icon}>
            <Star item={item} />
          </span>

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
