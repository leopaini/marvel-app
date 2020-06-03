import React from "react";
import useRouter from "./useRouter";
import { IRouterProps } from "../interfaces";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Store Provider
import { StoreProvider } from "../store";

// Styled Components
import { Body } from "../elements";
import { ThemeProvider } from "styled-components";

// Components
import { Nav, Home, Comic, Favorites } from "../components";

const Router: React.SFC<IRouterProps> = () => {
  const { theme, handleTheme } = useRouter();

  return (
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Body>
            <Nav setTheme={handleTheme} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/comic/:comicId" component={Comic} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Body>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default Router;
