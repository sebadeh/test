import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SiteUrl } from "./constants/urls";
import { WithLayout } from "./hocs/layout";
import Home from "./pages/home";
import LogIn from "./pages/log-in";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={SiteUrl.LOGIN} component={LogIn} />
        <Route exact path={SiteUrl.HOME}>
          {WithLayout(Home)}
        </Route>
      </Switch>
    </Router>
  );
};
