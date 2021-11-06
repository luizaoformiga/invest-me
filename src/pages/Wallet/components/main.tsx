import React from "react";
import luiz from "../../../assets/luiz.jpeg";

export const MainWallet: React.FC = () => {
  return (
    <main>
      <img src={luiz} alt="" />
      <h3>produto description</h3>
      <h2>R$ 89,90</h2>

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
