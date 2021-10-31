import React, { useContext, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { RestaurantContext } from "../App";
import RestaurantCard from "./RestaurantCard";

const RandomRest = () => {
  const { restaurants } = useContext(RestaurantContext);
  const [randomIndex, setRandomIndex] = useState(0);
  const doRandom = () => {
    if (restaurants) {
      const randomNum = Math.floor(Math.random() * restaurants.length);
      setRandomIndex(randomNum);
    }
  };

  useEffect(doRandom, [restaurants]);

  if (!restaurants) {
    return <h2>Loading...</h2>;
  }

  return (
    <Card className="container">
      <RestaurantCard rest={restaurants[randomIndex]} />
      <button className="random" variant="outline-success" onClick={doRandom}>
        Random Restaurant
      </button>
    </Card>
  );
};

export default RandomRest;
