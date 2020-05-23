import React, { Suspense, lazy, useState } from "react";
import { IRouterProps } from "../interfaces";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Styled Components
import { themeLight } from "../theme";
import { ThemeProvider } from "styled-components";

// Components
const Home = lazy(() => import("../components/Home"));
const Nav = lazy(() => import("../components/Nav"));

const Router: React.SFC<IRouterProps> = () => {
  const [theme, setTheme] = useState(themeLight);

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <ThemeProvider theme={theme}>
          <Nav setTheme={setTheme} />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} /> */}
          </Switch>
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
