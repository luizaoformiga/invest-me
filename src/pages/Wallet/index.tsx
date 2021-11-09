import React, { useEffect } from "react";
import { Catalog } from "./components";
import { WalletDiv } from "./styles";

export const Wallet: React.FC = () => {
  useEffect(() => {
    document.title = "INVEST.ME | WALLET ";
  }, []);

  return (
    <WalletDiv>
      <Catalog />
    </WalletDiv>
  );
};
