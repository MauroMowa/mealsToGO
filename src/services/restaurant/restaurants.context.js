import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRestaurants = () => {
    restaurantRequest("51.219448,4.402464")
      .then((rests) => {
        setRestaurants(rests);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setTimeout(() => getRestaurants(), 4000);
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
