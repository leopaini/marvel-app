import { useState, useEffect, useCallback } from "react";
import { Theme } from "../interfaces";
import { themeLight } from "../theme";

const useRouter = () => {
  const [theme, setTheme] = useState(themeLight);

  const handleTheme = useCallback((theme: Theme): void => {
    localStorage.setItem("theme", JSON.stringify(theme));
    setTheme(theme);
  }, []);

  useEffect(() => {
    const themeStorage = localStorage.getItem("theme");
    if (themeStorage) {
      const theme = JSON.parse(themeStorage);
      handleTheme(theme);
    }
  }, [handleTheme]);

  return {
    theme,
    handleTheme
  };
};

export default useRouter;
