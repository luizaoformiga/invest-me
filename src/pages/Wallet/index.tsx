import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "../../store";
import { RepositoriesActions } from "../../store/ducks/repositories/actions";

import { WalletComponent } from "./styles";
import { FooterWallet, HeaderWallet, MainWallet } from "./components";
import { Repository } from "../../store/ducks/repositories/types";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

const Wallet: React.FC<Props> = (props) => {
  const { repositories } = props;

  useEffect(() => {
    document.title = "INVEST.ME | WALLET";

    const { loadRequest } = props;
    loadRequest();
  }, [props]);

  return (
    <WalletComponent>
      <HeaderWallet />
      {repositories.map((repository, index) => (
        <MainWallet key={index} repository={repository} />
      ))}
      <FooterWallet />
    </WalletComponent>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
