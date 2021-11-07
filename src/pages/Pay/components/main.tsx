import React from "react";
import store from "../../../store";

export const MainPay: React.FC = () => {
  const handleAddProductCart = (products?: any): void => {
    store.dispatch({ type: "product/add", payload: [products] });
    console.log("add", store.getState());
  };

  return (
    <main>
      <button onClick={handleAddProductCart}>ADICIONAR PRODUTO</button>
    </main>
  );
};
