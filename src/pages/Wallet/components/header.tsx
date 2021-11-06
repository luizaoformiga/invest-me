import React from "react";
import { AiOutlineArrowLeft, AiOutlineShoppingCart } from "react-icons/ai";

export const HeaderWallet: React.FC = () => {
  return (
    <header>
      <a href="#!">
        <AiOutlineArrowLeft style={{ color: "#fff", fontSize: "35px" }} />
      </a>
      <a href="#!">
        <AiOutlineShoppingCart style={{ color: "#fff", fontSize: "35px" }} />
      </a>
    </header>
  );
};
