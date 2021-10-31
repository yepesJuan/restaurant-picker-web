import React from "react";
import { useHistory } from "react-router";
import { Card } from "react-bootstrap";
import './styles.css'

const RestaurantCard = ({rest}) => {
  let history = useHistory();
  return (
    <Card className="card" onClick={() => history.push('/details/' + rest.id) } >
      <Card.Img className="cardImage" variant="top" src={rest.photoUrl} />
      <Card.Body>
        <Card.Title className="cardTitle">{rest.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default RestaurantCard;
