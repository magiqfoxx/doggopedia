import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import App from "./App";
import Quiz from "./components/Quiz";
import Page404 from "./Page404";

const Navigation = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/quiz" exact component={Quiz} />
      <Route component={Page404} />
    </Switch>
  );
};

export default Navigation;
