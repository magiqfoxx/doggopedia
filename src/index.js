import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./Navigation";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Navigation />
  </BrowserRouter>,
  document.getElementById("root")
);
