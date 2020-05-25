import React from "react";
import cx from "classnames";

// Styles
import styles from "./Loading.module.css";

export interface ILoadingProps {}

const Loading: React.SFC<ILoadingProps> = () => {
  return (
    <main className={cx(styles.loader, "container")}>
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

        <p>Loading...</p>
      </div>
    </main>
  );
};

export default Loading;
