import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import App from "./App";
import Quiz from "./components/Quiz";

const Navigation = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/quiz" exact component={Quiz} />
    </Switch>
  );
};

export default Navigation;
