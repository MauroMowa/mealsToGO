import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(restaurantTransform(mock));
  });
};

const restaurantTransform = ({ result = [] }) => {
  const mappedResult = result.map((rest) => ({
    ...rest,
    isOpenNow: rest.opening_hours && rest.opening_hours.open_now,
    isClosedTemporarily: rest.business_status === "CLOSED_TEMPORARILY",
  }));
  return camelize(mappedResult);
};
