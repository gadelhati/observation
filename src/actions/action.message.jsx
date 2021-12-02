import { constants } from "../types/constants";

export const setMessage = (message) => ({
  type: constants.SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: constants.CLEAR_MESSAGE,
});
