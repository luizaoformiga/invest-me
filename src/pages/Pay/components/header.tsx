import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

export const HeaderPay: React.FC = () => {
  return (
    <header>
      <div>
        <a href="/">
          <AiOutlineArrowLeft style={{ fontSize: "40px", color: "#fff" }} />
        </a>
      </div>
      <div>
        <h2>Carrinho de Compras</h2>
      </div>
      <div>
        <a href="/wallet">
          <FiShoppingCart style={{ fontSize: "40px", color: "#fff" }} />
        </a>
      </div>
    </header>
  );
};
