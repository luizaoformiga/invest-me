import { AnyAction } from "redux";
import { CartTypes } from "../types";

/*
const initialState: CartRepository = {
  cardData: [],
};
*/

const cardItems = (state = [], action: AnyAction) => {
  switch (action.type) {
    case CartTypes.ADD_ITEM:
      return [...state, { cardData: action.data }];
    default:
      return state;
  }
}

export default cardItems;