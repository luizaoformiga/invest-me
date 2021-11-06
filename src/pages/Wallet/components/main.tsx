import React from "react";
import { Repository } from "../../../store/ducks/repositories/types";

interface StateProps {
  repository: Repository;
}

export const MainWallet: React.FC<StateProps> = ({ repository }) => {
  return (
    <main>
      <img src={repository.image} alt="" />
      <h3>{repository.description}</h3>
      <h2>R$ {repository.price}</h2>

      <div className="description">
        <h4>Descrição</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
          aspernatur libero architecto atque doloremque deserunt, aliquam soluta
          voluptatum earum dolorum, ipsum hic? Enim itaque, qui consequatur
          rerum esse in unde.
        </p>
      </div>
    </main>
  );
};
