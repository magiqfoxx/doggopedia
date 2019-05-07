import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import Navigation from "./Navigation";

ReactDOM.render(
  <HashRouter>
    <Navigation />
  </HashRouter>,
  document.getElementById("root")
);
