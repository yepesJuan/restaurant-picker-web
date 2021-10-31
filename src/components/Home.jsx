import  React, { useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantContext } from "../App";
import { CardGroup } from "react-bootstrap";

function Home() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <CardGroup className="container">
      {!restaurants 
        ? <p>Loading...</p>
        : 
        restaurants.map(rest => <RestaurantCard key={rest.id} rest={rest} />)
      }
    </CardGroup>
  );
}

export default Home;
