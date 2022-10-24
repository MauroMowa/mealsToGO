import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationsMock = locations[searchTerm];
    if (!locationsMock) reject("not found");
    resolve(locationTransform(locationsMock));
  });
};

const locationTransform = (location) => {
  const { geometry = {} } = camelize(location.results)[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
