import React, { useState, createContext, useEffect, useContext } from "react";

import { restaurantRequest } from "./restaurants.service";

import { LocationsContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationsContext);

  const getRestaurants = (locationString) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(
      () =>
        restaurantRequest(locationString)
          .then((rests) => {
            setRestaurants(rests);
            setIsLoading(false);
          })
          .catch((err) => {
            setError(err);
            setIsLoading(false);
          }),
      2000
    );
  };

  useEffect(() => {
    const locationString = `${location?.lat},${location?.lng}`;
    getRestaurants(locationString);
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
