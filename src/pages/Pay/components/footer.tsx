import React from "react";
import store from "../../../store";

export const FooterPay: React.FC = () => {
  const handleEraseItem = (id: any): void => {
    store.dispatch({ type: "product/erase", payload: id });
    console.log("removes", store.getState());
  };

  const handleFinalization = () => {
    alert("parabens");
  };

  return (
    <footer>
      <button className="finalization" onClick={handleFinalization}>
        FINALIZAR
      </button>
      <button className="eraseCar" onClick={handleEraseItem}>
        LIMPAR CARRINHO
      </button>
    </footer>
  );
};
