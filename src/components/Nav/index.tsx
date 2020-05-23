import React, { useContext } from "react";
import { INavProps } from "../../interfaces";
import { ReactComponent as Logo } from "../../img/logo.svg";

// Styled Components
import { NavBar, Input } from "./styles";
import { ThemeContext } from "styled-components";
import { themeLight, themeDark, ThemeType } from "../../theme";

// Style modules
import styles from "./Nav.module.css";

const Nav: React.SFC<INavProps> = props => {
  const { setTheme } = props;
  const themeContext = useContext(ThemeContext);

  const handleClick = (): void => {
    if (themeContext.id === ThemeType.light) setTheme(themeDark);
    else setTheme(themeLight);
  };

  return (
    <NavBar>
      <Logo className={styles.logo} />
      <span className={styles.search}>
        {/* <input type="text" placeholder="Search" /> */}
        <Input placeholder="Search" />
        <i className="fas fa-search"></i>
      </span>

      <span className={styles.navActions}>
        <i className="far fa-star"></i>
        <button onClick={handleClick}>change theme</button>
      </span>
    </NavBar>
  );
};

export default Nav;
