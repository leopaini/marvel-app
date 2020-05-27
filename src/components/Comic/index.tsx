import React from "react";
import { useState } from "../../store";
import { useParams } from "react-router";
import { getComicById } from "../../api";
import { IComicProps, IComic, IThumbnail, ICreatorItem } from "../../interfaces";

// Styles
import { Description } from "./styles";
import styles from "./Comic.module.css";
import { Container } from "../../elements";

const Comic: React.SFC<IComicProps> = () => {
  const state = useState();
  const { comicId } = useParams();
  const [comic, setComic] = React.useState<IComic | undefined>();

  React.useEffect(() => {
    if (comicId) {
      if (state.comics[comicId]) setComic(state.comics[comicId]);
      else
        getComicById(comicId).then((results: IComic[]) => {
          const result = results[0];
          console.log(result);
          // Guardar en state.
          setComic(result);
        });
    }
  }, [comicId, state.comics]);

  const getPath = (thumb: IThumbnail): string => {
    return `${thumb.path}.${thumb.extension}`;
  };

  if (!comic) return null;

  const published = comic.dates.find(el => el.type === "onsaleDate");

  return (
    <Container className={styles.comic}>
      <div className={styles.contentImg}>
        <img src={getPath(comic.thumbnail)} alt={comic.title} />
      </div>

      <Description>
        <h1 className={styles.title}>{comic.title}</h1>

        <ul className={styles.listMenu}>
          {published && (
            <li className={styles.listItem}>
              <span>Published:</span> {published.date}
            </li>
          )}
          {comic.creators.items.map((el: ICreatorItem, index: number) => (
            <li key={index} className={styles.listItem}>
              <span>{el.role}:</span>
              {el.name}
            </li>
          ))}
        </ul>

        <p className={styles.description}>{comic.description}</p>
      </Description>
    </Container>
  );
};

export default Comic;
