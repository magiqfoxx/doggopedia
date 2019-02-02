import React, { Component } from "react";
import Dog from "./Dog";
import SearchBar from "./SearchBar";
import "./Doggopedia.css";

class Doggopedia extends Component {
  state = {};
  listOfDogs = [
    "daschund",
    "doberman",
    "german-shepherd",
    "golden-retriever",
    "husky",
    "labrador",
    "pitbull",
    "pomeranian",
    "pug",
    "rottweiler",
    "scottish-terrier",
    "west-highland-white-terrier",
    "yorkshire-terrier"
  ];

  showDetails = dog => {
    this.props.showDetails(dog);
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="logo">
            <img className="logo--image" src="../img/paw.png" alt="paw" />
            <h1>doggopedia</h1>
          </div>
          <SearchBar />
          <hr />
        </header>

        <section>
          <main>
            {this.listOfDogs.map((dog, i) => {
              return <Dog showDetails={this.showDetails} dog={dog} key={i} />;
            })}
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default Doggopedia;
