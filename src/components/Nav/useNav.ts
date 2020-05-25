import React from "react";
import { fetchData } from "../../api";
import { useDispatch } from "../../store";
import { ThemeContext } from "styled-components";
import { themeLight, themeDark } from "../../theme";
import { ICharacter, Theme, ThemeType } from "../../interfaces";

const useNav = (setTheme: React.Dispatch<React.SetStateAction<Theme>>) => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const themeContext = React.useContext(ThemeContext);

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
    fetchData(search)
      .then((results: ICharacter[]) => {
        setItems(results);
      })
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
    handleClick,
    handleChange,
    handleSubmit
  };
};

export default useNav;
