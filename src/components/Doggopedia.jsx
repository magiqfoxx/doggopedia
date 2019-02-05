import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from "./Main";
import SearchBar from "./SearchBar";
import "./Doggopedia.css";

const Doggopedia = props => {
  const showDetails = dog => {
    props.showDetails(dog);
  };

  const onFormSubmit = term => {
    props.onFormSubmit(term);
  };

  return (
    <React.Fragment>
      <header>
        <Link to="/">
          <div className="header--logo">
            <img
              className="header--logo--image"
              src="./img/paw.png"
              alt="paw"
            />
            <h1 className="header--logo--text">doggopedia</h1>
          </div>
        </Link>
        <nav className="header--nav">
          <Link to="/quiz">Quiz</Link>
        </nav>

        <SearchBar onFormSubmit={onFormSubmit} />
        <hr />
      </header>
      <section>
        <Main showDetails={showDetails} />,
      </section>
      <footer>Copyright by Kat</footer>
    </React.Fragment>
  );
};

export default Doggopedia;
