import React, { useEffect } from "react";

import { WalletComponent } from "./styles";
import { FooterWallet, HeaderWallet, MainWallet } from "./components";
import { Repository } from "../../store/ducks/repositories/types";
import { Loading } from "../../helper";

interface StateProps {
  repositories?: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

export const Wallet: React.FC<Props> = (props) => {
  const { repositories } = props;

  useEffect(() => {
    document.title = "INVEST.ME | WALLET";

    const { loadRequest } = props;
    loadRequest();
  }, [props]);

  return (
    <WalletComponent>
      <HeaderWallet />
      {repositories ? repositories?.map((repository, index) => (
        <MainWallet key={index} repository={repository} />
      )): <Loading />}
      <FooterWallet />
    </WalletComponent>
  );
};