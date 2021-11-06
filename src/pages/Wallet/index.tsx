import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { ApplicationState } from "../../store";
import { RepositoriesActions } from "../../store/ducks/repositories/actions";

import { WalletComponent } from "./styles";

import { FooterWallet, HeaderWallet, MainWallet } from "./components";

const Wallet: React.FC = () => {
  useEffect(() => {
    document.title = "Wallet";
  }, []);

  return (
    <WalletComponent>
      <HeaderWallet />
      <MainWallet />
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
