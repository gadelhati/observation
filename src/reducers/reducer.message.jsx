import { constants } from "../types/constants";

const initialState = {};

export default function message(state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
   case constants.SET_MESSAGE:
   return { message: payload };

   case constants.CLEAR_MESSAGE:
      return { message: "" };

   default:
      return state;
  }
}
