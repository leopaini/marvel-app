import React from "react";
import cx from "classnames";
import useModal from "./useModal";
import { isCharacter } from "../../helpers";
import { IModalProps, IComic } from "../../interfaces";

// Styles
import styles from "./Modal.module.css";

const Modal: React.SFC<IModalProps> = ({ item, closeModal }) => {
  const { loading, state, getURLImg } = useModal(item);
  const items = state.comics[item.id];
  const modalClass = cx(styles.modal, items && !loading ? styles.open : "");

  return (
    <section className={styles.container} onClick={closeModal}>
      {loading && (
        <div className={styles.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      <div className={modalClass} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h1>{isCharacter(item) ? item.name : item.title}</h1>
          <i className="far fa-times-circle" onClick={closeModal}></i>
        </div>

        {items && (
          <div className={styles.content}>
            <ul className={styles.listMenu}>
              {items.map((el: IComic) => (
                <li key={el.id} className={styles.listItem}>
                  <div className={styles.thumb}>
                    <img src={getURLImg(el.thumbnail)} alt={el.title} />
                  </div>
                  <div className={styles.info}>
                    <p className={styles.title}>{el.title}</p>
                    <p
                      className={styles.description}
                      dangerouslySetInnerHTML={{ __html: el.description! }}></p>
                  </div>
                </li>
              ))}
            </ul>
            {!items.length && (
              <span className={styles.notMatches}>
                <p>No matches found!</p>
                <p>Sorry, nothing to see here</p>
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Modal;
