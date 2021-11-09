import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const HeaderHome: React.FC = () => {
  return (
    <header>
      <h2>Produtos</h2>
      <div>
        <a href="/pay">
          <AiOutlineShoppingCart style={{ fontSize: "40px", color: "#ffffff" }} />
        </a>
      </div>
    </header>
  );
};
