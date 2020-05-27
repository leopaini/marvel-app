import React from "react";
import { fetchData } from "../../api";
import { useDispatch } from "../../store";
import { useHistory } from "react-router";
import { ThemeContext } from "styled-components";
import { themeLight, themeDark } from "../../theme";
import { ICharacter, Theme, ThemeType } from "../../interfaces";

const useNav = (setTheme: React.Dispatch<React.SetStateAction<Theme>>) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const themeContext = React.useContext(ThemeContext);

  const handleHome = (): void => {
    history.push("/");
  };

  const handleClick = (): void => {
    if (themeContext.id === ThemeType.light) setTheme(themeDark);
    else setTheme(themeLight);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Case of search with direct link from marvel
    if (search.includes("http") && search.includes("comics")) {
      const comicId = parseInt(search.split("/")[5]);
      if (!isNaN(comicId)) {
        history.push(`/comic/${comicId}`);
      }
    } else
      fetchData(search)
        .then((results: ICharacter[]) => setItems(results))
        .finally(() => setLoading(false));
  };

  // Dispatch actions
  const setLoading = (loading: boolean): void => {
    dispatch({
      type: "SET_LOADING",
      payload: { loading }
    });
  };

  const setItems = (items: ICharacter[]): void => {
    dispatch({
      type: "ADD_ITEMS",
      payload: { items }
    });
  };

  return {
    search,
    handleHome,
    handleClick,
    handleChange,
    handleSubmit
  };
};

export default useNav;
