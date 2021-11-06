import { AnyAction, Reducer } from "redux";
import { createReducer } from "typesafe-actions";
import { addItem, removeItem } from "./actions";
import { CartRepositoriesState, CartTypes } from "./types";

const INITIAL_STATE: any = [];

/*
const cartReducer = createReducer(INITIAL_STATE, {
  [addItem.type]: (state: Array<any>, action: AnyAction) => [
    ...state,
    action.payload,
  ],
  [removeITem.type]: (state: Array<any>, action: AnyAction) =>
    state.filter((item) => item.id !== action.payload),
});
*/

export const cartReducer: Reducer<any, AnyAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case CartTypes.ERASE_CART:
      return { ...state, data: action.payload.data };
    case CartTypes.ADD_ITEM:
      return [{ ...state, data: action.payload }];
    case CartTypes.REMOVE_ITEM:
      return [
        (stateAction: Array<any>) =>
          stateAction.filter((item) => item.id !== action.payload),
      ];
    default:
      return state;
  }
};
