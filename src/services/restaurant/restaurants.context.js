import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={[1, 2, 3]}>
      {children}
    </RestaurantsContext.Provider>
  );
};