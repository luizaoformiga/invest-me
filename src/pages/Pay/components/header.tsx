import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const HeaderPay: React.FC = () => {
  return (
    <header>
      <a href="/">
        <AiOutlineArrowLeft style={{ fontSize: "40px", color: "#fff" }} />
      </a>
      <h2>Carrinho de Compras</h2>
    </header>
  );
};
