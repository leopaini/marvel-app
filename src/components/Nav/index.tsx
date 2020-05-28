import React from "react";
import cx from "classnames";
import useNav from "./useNav";
import { INavProps } from "../../interfaces";
import { ReactComponent as Logo } from "../../img/logo.svg";

// Styles
import styles from "./Nav.module.css";
import { Tooltip } from "../../elements";
import { NavBar, Input, Icon, Vr } from "./styles";

const Nav: React.SFC<INavProps> = ({ setTheme }) => {
  const {
    search,
    favPage,
    handleFav,
    handleHome,
    handleSubmit,
    handleChange,
    handleClick
  } = useNav(setTheme);

  return (
    <NavBar>
      <Logo className={styles.logo} onClick={handleHome} />

      <form className={styles.search} onSubmit={handleSubmit}>
        <Input value={search} placeholder="Search" onChange={handleChange} />
        <i className="fas fa-search"></i>
      </form>

      <div className={styles.navActions}>
        <span className={styles.iconContent}>
          <Icon
            className={cx(styles.icon, favPage ? "fas fa-star" : "far fa-star")}
            onClick={handleFav}
          />
          {!favPage && <Tooltip className={styles.tooltip}>Go to Favorites</Tooltip>}
        </span>
        <Vr />
        <span className={styles.iconContent}>
          <Icon className={cx(styles.icon, "fas fa-cog")} onClick={handleClick} />
          <Tooltip className={styles.tooltip}>Change the Theme</Tooltip>
        </span>
      </div>
    </NavBar>
  );
};

export default Nav;
