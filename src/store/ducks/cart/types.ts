export enum CartTypes {
  ADD_ITEM = "@repositories/ADD_ITEM",
  REMOVE_ITEM = "@repositories/REMOVE_ITEM",
  ERASE_CART = "@repositories/ERASE_CART"
}

export interface CartRepository {
  cardData: Array<any>;
}

export interface CartRepositoriesState {
  readonly data: CartRepository[];
}
