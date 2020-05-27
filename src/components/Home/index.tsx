import React from "react";
import useHome from "./useHome";
import { Card, Loading } from "../";
import { IHomeProps, ICharacter } from "../../interfaces";

// Styles
import { Message } from "./styles";
import styles from "./Home.module.css";
import { Container } from "../../elements";

const Home: React.SFC<IHomeProps> = () => {
  const { state } = useHome();

  if (state.loading) return <Loading />;
  return (
    <Container className={styles.home}>
      <h2 className={styles.subtitle}>{`${state.items.length} results`}</h2>

      <section className={styles.cards}>
        {state.items.map((item: ICharacter) => (
          <Card item={item} key={item.id} />
        ))}
      </section>

      {state.items.length === 0 && (
        <span className={styles.noMatches}>
          <Message>No matches found!</Message>
          <Message>Sorry, nothing to see here</Message>
        </span>
      )}
    </Container>
  );
};

export default Home;
