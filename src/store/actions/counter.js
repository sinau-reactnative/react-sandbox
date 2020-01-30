import { INCREMENT, DECREMENT } from "../types";

export const increaseNumber = () => {
  return {
    type: INCREMENT
  };
};

export const decreaseNumber = () => {
  return {
    type: DECREMENT
  };
};
