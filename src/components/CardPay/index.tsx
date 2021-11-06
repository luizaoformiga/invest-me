import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

import { Repository } from "../../store/ducks/repositories/types";
import { CardPayStyles } from "./styles";

interface StateProps {
  repository?: Repository;
}

export const CardPay: React.FC<StateProps> = ({ repository }) => {
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
          <img src={repository?.image} alt="" />
          <div>
            <h3>Camiseta description</h3>
            <p>Categoria: {repository?.sex}</p>
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
            <strong>R$ {repository?.price}</strong>
          </div>
        </div>
    </CardPayStyles>
  );
};
