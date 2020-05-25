import React from "react";
import useHome from "./useHome";
import { Card, Loading } from "../";
import { IHomeProps, ICharacter } from "../../interfaces";

// Styles
import styles from "./Home.module.css";
import { Main, Message } from "./styles";

const Home: React.SFC<IHomeProps> = () => {
  const {
    state: { loading, items }
  } = useHome();

  if (loading) return <Loading />;

  return (
    <Main className="container">
      <h2 className={styles.subtitle}>{`${items.length} results`}</h2>

      <section className={styles.cards}>
        {items.map((item: ICharacter) => (
          <Card item={item} key={item.id} />
        ))}
      </section>

      {items.length === 0 && (
        <span className={styles.noMatches}>
          <Message>No matches found!</Message>
          <Message>Sorry, nothing to see here</Message>
        </span>
      )}
    </Main>
  );
};

export default Home;
