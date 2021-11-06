import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

import luiz from "../../assets/luiz.jpeg";
import { CardPayStyles } from "./styles";

export const CardPay: React.FC = () => {
  const [state, setState] = useState(0);

  const handleUp = (): void => {
    setState(state + 1);
  };

  const handleDown = (): void => {
    setState(state - 1);
  };

  return (
    <CardPayStyles>
      <div className="contentWrapper">
        <img src={luiz} alt="" />
        <div>
          <h3>Camiseta description</h3>
          <p>Categoria: Masculino</p>
          <div className="conteinerButton">
            <p>Quantidade: {state}</p>
            <button onClick={handleDown}>-</button>
            <button onClick={handleUp}>+</button>
          </div>
        </div>
        <div className="conteinerPrices">
          <a href="#!">
            <AiFillDelete className="aiFillDelete" />
          </a>
          <strong>R$ 90,90</strong>
        </div>
      </div>
    </CardPayStyles>
  );
};
