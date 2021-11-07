import React from "react";
import { Repository } from "../../../store/ducks/repositories/types";

interface StateProps {
  repository: Repository;
}

export const MainWallet: React.FC<StateProps> = ({ repository }) => {
  return (
    <main>
      <img src={repository.image} alt={repository.title} />
      <h3>{repository.title}</h3>
      <h2>R$ {repository.price}</h2>

      <div className="description">
        <h4>Description</h4>
        <p>{repository.description}</p>
      </div>
    </main>
  );
};
