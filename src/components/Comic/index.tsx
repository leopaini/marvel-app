import React from "react";
import Star from "../Star";
import { useParams } from "react-router";
import { getComicById } from "../../api";
import { IComicProps, IComic, IThumbnail, ICreatorItem } from "../../interfaces";

// Styles
import { Description } from "./styles";
import styles from "./Comic.module.css";
import { Container } from "../../elements";

const Comic: React.SFC<IComicProps> = () => {
  const { comicId } = useParams();
  const [comic, setComic] = React.useState<IComic | undefined>();

  React.useEffect(() => {
    if (comicId) {
      getComicById(comicId).then((results: IComic[]) => {
        const result = results[0];
        setComic(result);
      });
    }
  }, [comicId]);

  const getPath = (thumb: IThumbnail): string => {
    return `${thumb.path}.${thumb.extension}`;
  };

  // TODO: Loading page
  if (!comic) return null;

  const published = comic.dates.find(el => el.type === "onsaleDate");

  return (
    <Container className={styles.comic}>
      <div className={styles.contentImg}>
        <img src={getPath(comic.thumbnail)} alt={comic.title} />
      </div>

      <Description className={styles.description}>
        <div className={styles.header}>
          <h1 className={styles.title}>{comic.title}</h1>
          <span className={styles.icon}>
            <Star item={comic} />
          </span>
        </div>

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
