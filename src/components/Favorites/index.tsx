import React from "react";
import Card from "../Card";
import { useState } from "../../store";

import styles from "./Favorites.module.css";
import { Container, Message } from "../../elements";

export interface IFavoritesProps {}

const Favorites: React.SFC<IFavoritesProps> = () => {
  const state = useState();

  return (
    <Container className={styles.favorites}>
      <h2 className={styles.subtitle}>
        {`${Object.keys(state.favorites).length} favorite/s`}
      </h2>

      <section className={styles.cards}>
        {Object.keys(state.favorites).map((key: string) => {
          const item = state.favorites[key];
          return <Card item={item} key={item.id} />;
        })}
      </section>

      {Object.keys(state.favorites).length === 0 && (
        <span className={styles.noItems}>
          <Message>No Favorites</Message>
          <Message>
            To add a favorite, just click in the <strong>star icon</strong> of a card
          </Message>
        </span>
      )}
    </Container>
  );
};

export default Favorites;
