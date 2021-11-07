import React from "react";
import { useSelector } from "react-redux";

import { IState } from "../../store/index copy";
import { ICartItem } from "../../store/modules/cart/types";
import { Catalog } from "./components/catalog";

export const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart && cart.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.product.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Catalog />
    </>
  );
};

