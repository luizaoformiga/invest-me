import React from "react";
import { Repository } from "../../store/ducks/repositories/types";
import { CardStyles } from "./styles";

interface StateProps {
  repository?: Repository;
}

export const Card: React.FC<StateProps> = ({ repository }) => {
  return (
    <CardStyles>
        <div className="contentWrapper">
          <img src={repository?.image} alt="imagem" />
          <p>{repository?.description}</p>
          <p>R$: {repository?.price}</p>
        </div>
    </CardStyles>
  );
};
