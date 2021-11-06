import { action } from "typesafe-actions";
import { CartTypes } from "./types";

export const addItem = action(CartTypes.ADD_ITEM);
export const removeItem = action(CartTypes.REMOVE_ITEM);
