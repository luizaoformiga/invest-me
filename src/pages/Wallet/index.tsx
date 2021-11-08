import React, { useEffect } from "react";
import { Catalog } from "./components";
import { WalletDiv } from "./styles";

export const Wallet: React.FC = () => {
  useEffect(() => {
    document.title = "INVESTME ";
  }, []);

  return (
    <WalletDiv>
      <Catalog />
    </WalletDiv>
  );
};
