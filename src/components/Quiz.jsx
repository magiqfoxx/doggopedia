import React, { Component } from "react";
import "./Quiz.css";
import { listOfDogs } from "./data";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Doggopedia from "./Doggopedia";
import App from "../App";

class Quiz extends Component {
  state = { breed: 0, points: 0 };

  breeds = [];
  pictures = [];

  componentDidMount = () => {
    this.breeds = Object.values(listOfDogs); //kept as non-mutated copy
    this.pictures = Object.keys(listOfDogs); //mutated during the game to avoid repeats
  };

  newPhoto = () => {
    let returnArr = [];
    let breeds = this.breeds.slice(); //mutated inside method only. copy

    function getRandom(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let index = getRandom(this.pictures.length);
    let picture = this.pictures[index]; //the image name
    this.pictures.splice(index, 1);

    let answer1 = listOfDogs[picture];
    breeds.splice(breeds.indexOf(answer1), 1); //removing the correct answer to avoid duplicates

    const getAnswer = () => {
      let index = getRandom(breeds.length);
      returnArr.push(breeds[index]);
      breeds.splice(index, 1);
    };

    getAnswer();
    getAnswer();
    getAnswer();

    let correctI = getRandom(4); //random position for correct guess

    returnArr.splice(correctI, 0, answer1); //insert the correct answer at position correct

    returnArr.push(picture);

    return returnArr;
  };

  newRound = () => {
    let turn = this.newPhoto();

    this.setState({
      a1: turn[0],
      a2: turn[1],
      a3: turn[2],
      a4: turn[3],
      picture: turn[4],
      breed: listOfDogs[turn[4]]
    });
  };

  showMessage = () => {
    let el = document.querySelector(".quiz--message");
    el.style.display = "block";

    setTimeout(() => {
      el.style.display = "none";
    }, 1000);
  };

  answerChosen = answer => {
    if (this.pictures.length < 1) {
      this.showMessage(`Game's over. You got ${this.points} right!`);
    }
    if (answer === this.state.breed) {
      let points = this.state.points + 1;
      this.setState({ points });
    } else {
      this.showMessage();
    }
    this.newRound();
  };

  renderQuiz = () => {
    if (!this.state.breed) {
      return (
        <button className="quiz--button" onClick={this.newRound}>
          start
        </button>
      );
    } else {
      return [
        <span className="quiz--points" key="0">
          {this.state.points} points
        </span>,
        <section className="section__quiz" key="1">
          <div className="quiz" key="5">
            <div className="quiz--message">Wrong</div>
            <div className="quiz--image">
              <img src={`../img/${this.state.picture}.jpg`} alt="dog" />
            </div>
            <div className="quiz--options">
              <ul>
                <li onClick={() => this.answerChosen(this.state.a1)} key="1">
                  {this.state.a1.replace(/[_-]/g, " ")}
                </li>
                <li onClick={() => this.answerChosen(this.state.a2)} key="2">
                  {this.state.a2.replace(/[_-]/g, " ")}
                </li>
                <li onClick={() => this.answerChosen(this.state.a3)} key="3">
                  {this.state.a3.replace(/[_-]/g, " ")}
                </li>
                <li onClick={() => this.answerChosen(this.state.a4)}>
                  {this.state.a4.replace(/[_-]/g, " ")}
                </li>
              </ul>
            </div>
          </div>
        </section>
      ];
    }
  };

  renderContent = () => {
    return (
      <React.Fragment>
        <Switch>
          <Route
            extact
            path="/"
            exact={true}
            render={() => (
              <Doggopedia
                showDetails={this.showDetails}
                onFormSubmit={this.onTermSubmit}
              />
            )}
          />
        </Switch>

        <Link to="/">
          <div className="header--logo__quiz">
            <img
              className="header--logo--image"
              src="./img/paw.png"
              alt="paw"
            />
            <h1 className="header--logo--text">doggopedia</h1>
          </div>
        </Link>
        <div className="quiz--title">
          <h1>Can you guess the breed?</h1>
        </div>

        {this.renderQuiz()}

        <footer>Copyright by Kat</footer>
      </React.Fragment>
    );
  };
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route extact path="/quiz" render={() => this.renderContent()} />
            <Route extact path="/" exact={true} render={() => <App />} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Quiz;
