import React, { useEffect, useCallback } from "react";
import { useDispatch } from "../../store";
import { getCharactersByName } from "../../api";
import { ThemeContext } from "styled-components";
import { themeLight, themeDark } from "../../theme";
import { useHistory, useLocation } from "react-router";
import { ICharacter, IIndexItem, Theme, ThemeType } from "../../interfaces";

type ThemeAction = (theme: Theme) => void;

const useNav = (setTheme: ThemeAction) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const [showMenu, setShowMenu] = React.useState(false);
  const themeContext = React.useContext(ThemeContext);
  const favPage = location.pathname === "/favorites";

  const handleHome = (): void => {
    history.push("/");
  };

  const handleFav = (): void => {
    history.push("/favorites");
    setShowMenu(false);
  };

  const handleClick = (): void => {
    if (themeContext.id === ThemeType.light) setTheme(themeDark);
    else setTheme(themeLight);
    setShowMenu(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInitSearch();
    if (location.pathname !== "/") history.push("/");
    setLoading(true);

    // Case of search with direct link from marvel
    if (search.includes("http") && search.includes("comics")) {
      const comicId = parseInt(search.split("/")[5]);
      if (!isNaN(comicId)) {
        history.push(`/comic/${comicId}`);
      }
    } else
      getCharactersByName(search)
        .then((results: ICharacter[]) => setItems(results))
        .finally(() => setLoading(false));
  };

  const handleMobile = (): void => {
    setShowMenu(!showMenu);
  };

  // Dispatch actions
  const setLoading = useCallback(
    (loading: boolean): void => {
      dispatch({ type: "SET_LOADING", payload: { loading } });
    },
    [dispatch]
  );

  const setInitSearch = useCallback(() => {
    dispatch({ type: "SET_SEARCH" });
  }, [dispatch]);

  const setItems = useCallback(
    (items: ICharacter[]): void => {
      dispatch({ type: "ADD_ITEMS", payload: { items } });
    },
    [dispatch]
  );

  const setFavs = useCallback(
    (items: IIndexItem) => {
      dispatch({ type: "ADD_FAVS_FROM_LS", payload: { items } });
    },
    [dispatch]
  );

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      const favs = JSON.parse(favorites);
      setFavs(favs);
    }
  }, [setFavs]);

  return {
    search,
    favPage,
    showMenu,
    handleFav,
    handleHome,
    handleClick,
    handleChange,
    handleSubmit,
    handleMobile
  };
};

export default useNav;
