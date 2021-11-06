import React from "react";
import luiz from "../../assets/luiz.jpeg";
import { CardStyles } from "./styles";

export const Card: React.FC = () => {
  return (
    <CardStyles>
      <div className="contentWrapper">
        <img src={luiz} alt="imagem" />
        <p>Description</p>
        <p>R$: preço</p>
      </div>
    </CardStyles>
  );
};
