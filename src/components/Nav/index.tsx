import React, { useContext, useState } from "react";
import { INavProps } from "../../interfaces";
import { ReactComponent as Logo } from "../../img/logo.svg";

// Axios
import { fetchData } from "../../api";

// Styled Components
import { ThemeContext } from "styled-components";
import { NavBar, Input, Icon, Vr, Tooltip } from "./styles";
import { themeLight, themeDark, ThemeType } from "../../theme";

// Style modules
import styles from "./Nav.module.css";

const Nav: React.SFC<INavProps> = props => {
  const { setTheme } = props;
  const [search, setSearch] = useState("");
  const themeContext = useContext(ThemeContext);

  const handleClick = (): void => {
    if (themeContext.id === ThemeType.light) setTheme(themeDark);
    else setTheme(themeLight);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const results = await fetchData(search);
    console.log(results);
  };

  return (
    <NavBar>
      <Logo className={styles.logo} />

      <form onSubmit={handleSubmit}>
        <span className={styles.search}>
          <Input
            value={search}
            placeholder="Search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <i className="fas fa-search"></i>
        </span>
      </form>

      <div className={styles.navActions}>
        <span className={styles.icon}>
          <Icon className="far fa-star" />
          <Tooltip className={styles.tooltip}>Go to Favorites</Tooltip>
        </span>
        <Vr />
        <span className={styles.icon}>
          <Icon className="fas fa-cog" onClick={handleClick} />
          <Tooltip className={styles.tooltip}>Change the Theme</Tooltip>
        </span>
      </div>
    </NavBar>
  );
};

export default Nav;
