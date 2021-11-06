import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Repository } from "../../store/ducks/repositories/types";
import { ApplicationState } from "../../store";

import { RepositoriesActions } from "../../store/ducks/repositories/actions";

import { HomeDiv } from "./styles";
import { Card } from "../../components";
import { HeaderHome } from "./components";

type StateProps = {
  repository?: Repository[];
};

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

const Home: React.FC<Props> = (props) => {
  const { repository } = props;

  useEffect(() => {
    document.title = "INVEST.ME | HOME";

    const { loadRequest } = props;
    loadRequest();
  }, [props]);

  return (
    <HomeDiv>
      <HeaderHome />
      {repository?.map((repository, index) => (
        <main key={index}>
          <Card repository={repository} />
        </main>
      ))}
    </HomeDiv>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
