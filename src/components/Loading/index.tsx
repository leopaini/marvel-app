import React from "react";
import { ILoadingProps } from "../../interfaces";

// Styles
import styles from "./Loading.module.css";
import { Container, Paragraph } from "../../elements";

const Loading: React.SFC<ILoadingProps> = () => {
  return (
    <Container className={styles.loader}>
      <div className={styles.spinner}>
        <div className={styles.loadingSpinner}>
          <div className={styles.interwind}>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Paragraph>Loading...</Paragraph>
      </div>
    </Container>
  );
};

export default Loading;
