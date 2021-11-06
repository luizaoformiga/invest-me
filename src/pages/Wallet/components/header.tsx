import React from "react";
import { AiOutlineArrowLeft, AiOutlineShoppingCart } from "react-icons/ai";

export const HeaderWallet: React.FC = () => {
  return (
    <header>
      <a href="/home">
        <AiOutlineArrowLeft style={{ color: "#fff", fontSize: "35px" }} />
      </a>
      <a href="/pay">
        <AiOutlineShoppingCart style={{ color: "#fff", fontSize: "35px" }} />
      </a>
    </header>
  );
};
