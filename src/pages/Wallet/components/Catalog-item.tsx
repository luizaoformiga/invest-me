import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../store";
import { addProductToCartRequest } from "../../../store/cart/actions";
import { IProduct } from "../../../store/cart/types";

interface CatalogItemProps {
  product?: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFaciledStockCheck = useSelector<IState, boolean>((state: any): boolean => {
    return state?.cart?.failedStockCheck?.includes(product?.id)
  });

  const handleAddProductToCart = useCallback((): void => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <img
        src={product?.image}
        alt={product?.title}
        style={{ width: "50px" }}
      />
      <strong>{product?.title} - </strong>
      <strong>{product?.price} </strong>

      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>

      {hasFaciledStockCheck && (
        <span style={{ color: "red" }}>Falta de estoque!</span>
      )}
    </article>
  );
};
