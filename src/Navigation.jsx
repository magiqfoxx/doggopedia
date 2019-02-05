import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Quiz from "./components/Quiz";

const Navigation = () => {
  return (
    <Router>
      <React.Fragment>
        <Route extact path="/" exact component={App} />
        <Route extact path="/quiz" component={Quiz} />
      </React.Fragment>
    </Router>
  );
};

export default Navigation;
