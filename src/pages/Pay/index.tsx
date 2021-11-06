import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Repository } from "../../store/ducks/repositories/types";
import { ApplicationState } from "../../store";
import { RepositoriesActions } from "../../store/ducks/repositories/actions";

import { PayDiv } from "./styles";
import { CardPay } from "../../components";
import { HeaderPay, MainPay, FooterPay } from "./components";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

const Pay: React.FC<Props> = (props) => {
  const { repositories } = props;

  useEffect(() => {
    document.title = "INVEST.ME | PAY";

    const { loadRequest } = props;
    loadRequest();
  }, [props]);

  return (
    <PayDiv>
      <HeaderPay />
      {repositories.map((respository, index) => (
        <div key={index}>
          <CardPay repository={respository} />
          <CardPay repository={respository} />
        </div>
      ))}
      <MainPay />
      <FooterPay />
    </PayDiv>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
