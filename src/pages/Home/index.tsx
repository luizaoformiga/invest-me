import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Repository } from "../../store/ducks/repositories/types";
import { ApplicationState } from "../../store";

import { RepositoriesActions } from "../../store/ducks/repositories/actions";

import { HomeDiv } from "./styles";
import { Card } from "../../components/Card";

import { HeaderHome } from "./components";

type StateProps = {
  repository?: Repository[];
};

const Home: React.FC<StateProps> = (props) => {
  const { repository } = props;

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <HomeDiv>
      <HeaderHome /> 
      <main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
      {repository?.map((repository, index) => (
        <main key={index}>
          <div>
            <img src={repository.image} alt="imagem" title="imagem" />
            <p>{repository.title} heloo</p>
            <p>R$: {repository.price} preço</p>
          </div>
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
