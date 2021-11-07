import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

import { Repository } from "../../store/ducks/repositories/types";
import { CardPayStyles } from "./styles";

interface StateProps {
  repository?: Repository;
}

export const CardPay: React.FC<StateProps> = (props) => {
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
            {/*<button onClick={handleDown}>REMOVE ITEM</button>*/}
            <button>ADICIONAR ITEM</button>
          </div>
        </div>
        <div className="conteinerPrices">
          <a href="#!">
            <AiFillDelete className="aiFillDelete" />
          </a>
          <strong>R$ {props.repository?.price}</strong>
        </div>
      </div>
    </CardPayStyles>
  );
};
