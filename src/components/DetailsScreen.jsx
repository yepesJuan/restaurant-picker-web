import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { RestaurantContext } from '../App';
import './styles.css'


export default function DetailsScreen() {
  const { restId } = useParams();
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const [thisRest, setThisRest] = useState();
  useEffect(() => {
    if(restaurants && restId) {
      const _thisRest = restaurants.find(r => r.id === restId);
      setThisRest(_thisRest);
    }
  }, [restId, restaurants])
  if(!thisRest) {
    return <h2>Loading...</h2>
  }
  const addRating = (myRating) => {
    fetch('https://bocacode-intranet-api.web.app/restaurants/' + restId, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating: myRating })
    })
      .then(response => response.json())
      .then(setRestaurants)
      .catch(alert)
  }

  return (
  
    <Card className="container">
    <h2>{thisRest.name}</h2>
      <img src={thisRest.photoUrl} alt={thisRest.name} className="cardImage" />
      <h3 className="cardSubtitle">{thisRest.address}</h3> 
        <p className="cardSubtitle">Rating: {thisRest.rating.toFixed(0)}</p>
      <div>
        <h3>Rate It!</h3>
        <div style={{ flexDirection: 'row'}}>
          <button className="random" onClick={() => addRating(1)}>1</button>
          <button className="random" onClick={() => addRating(2)}>2</button>
          <button className="random" onClick={() => addRating(3)}>3</button>
          <button className="random" onClick={() => addRating(4)}>4</button>
          <button className="random" onClick={() => addRating(5)}>5</button>
        </div>
      </div>
    </Card>
  )
}
