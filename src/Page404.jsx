import React from "react";
import "./Page404.css";

const Page404 = ({ location }) => (
  <div id="page-404">
    <img
      src="./iconfinder_cat_eyes_182520.png"
      alt="cat looking up pleadingly"
    />
    <h1>Wrong address, sorry!</h1>
    <h2>
      No match found for <code>{location.pathname}</code>
    </h2>
    <br />
    <hr />
    <p>
      Icon made by <a href="https://www.iconfinder.com/iconka">Denis Sazhin</a>{" "}
      licensed by{" "}
      <a href="http://creativecommons.org/licenses/by/3.0/">CC 3.0 BY</a>
    </p>
  </div>
);

export default Page404;
