import React, { useState } from "react";
import { IRouterProps } from "../interfaces";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Store Provider
import { StoreProvider } from "../store";

// Styled Components
import { themeLight } from "../theme";
import { ThemeProvider } from "styled-components";

// Components
import { Nav, Home, Comic } from "../components";

const Router: React.SFC<IRouterProps> = () => {
  const [theme, setTheme] = useState(themeLight);

  return (
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Nav setTheme={setTheme} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/comic/:comicId" component={Comic} />
            {/*<Route path="/signup" component={SignUp} /> */}
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default Router;
