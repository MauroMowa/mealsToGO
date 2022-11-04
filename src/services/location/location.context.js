import React, { useState, useEffect, createContext } from "react";
import { locationRequest } from "./location.service";

export const LocationsContext = createContext();

export const LocationsContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchedKeyword) => {
    setIsLoading(true);
    setKeyword(searchedKeyword);
  };

  useEffect(() => {
    if (!keyword?.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then((rests) => {
        setLocation(rests);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [keyword]);

  return (
    <LocationsContext.Provider
      value={{ location, isLoading, error, search: onSearch, keyword }}
    >
      {children}
    </LocationsContext.Provider>
  );
};
