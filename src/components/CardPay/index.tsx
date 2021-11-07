import React from "react";
import { AiFillDelete } from "react-icons/ai";
import store from "../../store";

import { Repository } from "../../store/ducks/repositories/types";
import { CardPayStyles } from "./styles";

interface StateProps {
  repository?: Repository;
}

export const CardPay: React.FC<StateProps> = (props) => {
  const handleRemoveItem = (id: any): void => {
    store.dispatch({ type: "product/remove", payload: id });
    console.log("removes", store.getState());
  };

  return (
    <CardPayStyles>
      <div className="contentWrapper">
        <div className="contentImage">
          <img src={props.repository?.image} alt={props.repository?.title} />
        </div>
        <div className="contentDescription">
          <h3>{props.repository?.title}</h3>
          <p>Category: {props.repository?.category}</p>
          <div className="conteinerButton">
            <p>Quantidade:</p>
            <button>-</button>
            <button>+</button>
          </div>
        </div>
        <div className="conteinerPrices">
          <AiFillDelete
            className="aiFillDelete"
            onClick={handleRemoveItem}
            cursor="pointer"
          />
          <strong>R$ {props.repository?.price}</strong>
        </div>
      </div>
    </CardPayStyles>
  );
};
