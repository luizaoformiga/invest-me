import React, { useEffect } from "react";

import { Repository } from "../../store/ducks/repositories/types";

import { PayDiv } from "./styles";
import { CardPay } from "../../components";
import { HeaderPay, MainPay, FooterPay } from "./components";
import { Loading } from "../../helper";

interface StateProps {
  repositories?: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

export const Pay: React.FC<Props> = (props) => {
  const { repositories } = props;

  useEffect(() => {
    document.title = "INVEST.ME | PAY";

    const { loadRequest } = props;
    loadRequest();
  }, [props]);

  return (
    <PayDiv>
      <HeaderPay />
      {repositories ? repositories?.map((respository, index) => (
        <div key={index}>
          <CardPay repository={respository} />
        </div>
      )): <Loading />}
      <MainPay />
      <FooterPay />
    </PayDiv>
  );
};
