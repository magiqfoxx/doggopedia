import React from "react";
import Dog from "./Dog";

import { listOfDogs } from "./data";

const Main = props => {
  const breeds = Object.values(listOfDogs);

  const showDetails = dog => {
    props.showDetails(dog);
  };

  return (
    <main>
      <p>Data is fetched from wikipedia. Please allow a few seconds to load.</p>
      {breeds.map((dog, i) => {
        return <Dog showDetails={showDetails} dog={dog} key={i} />;
      })}
    </main>
  );
};

export default Main;
