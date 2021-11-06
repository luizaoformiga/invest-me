import { CartTypes } from "../types";

export const addToCart = (data: any) => {
  // console.warn("action",data)
  return {
    type: CartTypes.ADD_ITEM,
    data: data,
  };
};
