import React, { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Repository } from "../../store/ducks/repositories/types";
import { ApplicationState } from "../../store";

import { RepositoriesActions } from "../../store/ducks/repositories/actions";
import { PayDiv } from "./styles";
import { CardPay } from "../../components/CardPay";

import { HeaderPay, MainPay, FooterPay } from "./components";

type StateProps = {
  repository?: Repository[];
};

const Pay: React.FC<StateProps> = (props) => {
  useEffect(() => {
    document.title = "Pay";
  }, []);

  return (
    <PayDiv>
      <HeaderPay />  
      <div>
        <CardPay />
        <CardPay />
      </div>
      <MainPay /> 
      <FooterPay />   
    </PayDiv>
  );
};

/*

      {repository?.map((repository, index) => (
        <main key={index}>
          <img src={repository.image} alt="" />
          {/*<IconButton />*
          /*<p>{repository.title}</p>
          <p>Categoria: {repository.sex}</p>
          <p>Quantidade: {state}</p>
          <button onClick={handleDown}>-</button>
          <button onClick={handleUp}>+</button>
          <p>R$: {repository.price}</p>
        </main>
      ))}
*/

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
