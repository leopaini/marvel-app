import React from "react";
import cx from "classnames";
import { IThumbnail, ICardProps } from "../../interfaces";

// Styles
import styles from "./Card.module.css";
import { Tooltip } from "../../elements";
import { Thumb, Info, Name } from "./styles";

const Card: React.SFC<ICardProps> = ({ item }) => {
  const getImgPath = (thumbnail: IThumbnail): string => {
    return `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
  };

  return (
    <div className={styles.card}>
      <Thumb className={styles.thumb}>
        <i className={cx(styles.icon, "far fa-star")}></i>
        <Tooltip className={styles.tooltip}>Add to favorites</Tooltip>

        <img className={styles.image} src={getImgPath(item.thumbnail)} alt={item.name} />
      </Thumb>
      <Info className={styles.info}>
        <Name className={styles.name}>{item.name}</Name>
      </Info>
    </div>
  );
};

export default Card;
