import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter  as Router, Switch, Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import RandomRest from "./components/RandomRest";
import DetailsScreen from "./components/DetailsScreen";

export const RestaurantContext = createContext();

function App() {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    fetch(`https://bocacode-intranet-api.web.app/restaurants`)
      .then((res) => res.json(res))
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);

  return (
    <Router>
    <RestaurantContext.Provider value={{restaurants, setRestaurants }}>
      <div>
        <nav className="nav">
          <Link className="navTitle" to="/">Home </Link>
          <Link className="navTitle" to="/random"> Random</Link>
        </nav>
        <div>
          <Switch>
            <Route path="/details/:restId" component={DetailsScreen} />
            <Route path="/random" component={RandomRest} />
            <Route path="/" component={Home} />
          </Switch>
        </div> 
      </div>
    </RestaurantContext.Provider>
    </Router>
  );
}

export default App;
