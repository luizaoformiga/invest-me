import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Header: React.FC = () => {
  return (
    <header>
      <div>
        <a href="/pay">
          <AiOutlineArrowLeft style={{ fontSize: "40px", color: "#fff" }} />
        </a>
      </div>
      <div>
        <h1>CATALOGO</h1>
      </div>
      <div></div>
    </header>
  );
};
