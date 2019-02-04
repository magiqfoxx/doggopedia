import React, { Component } from "react";
import Main from "./Main";
import SearchBar from "./SearchBar";
import Quiz from "./Quiz";
import "./Doggopedia.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Doggopedia extends Component {
  state = { page: "main" };

  showDetails = dog => {
    this.props.showDetails(dog);
  };
  onFormSubmit = term => {
    this.props.onFormSubmit(term);
  };

  render() {
    return (
      <Router>
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

            <SearchBar onFormSubmit={this.onFormSubmit} />
            <hr />
          </header>

          <section>
            <Route
              extact
              path="/"
              render={() => <Main showDetails={this.showDetails} />}
            />
            :
            <Route extact path="/quiz" render={() => <Quiz />} />
          </section>

          <footer>Copyright by Kat</footer>
        </React.Fragment>
      </Router>
    );
  }
}

export default Doggopedia;
