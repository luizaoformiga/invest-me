import React, { useEffect } from "react";

import { Repository } from "../../store/ducks/repositories/types";

import { HomeDiv } from "./styles";
import { Card } from "../../components";
import { HeaderHome } from "./components";
import { Loading } from "../../helper";

type StateProps = {
  repositories?: Repository[];
};

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

export const Home: React.FC<Props> = (props) => {
  const { repositories } = props;

  useEffect(() => {
    document.title = "INVEST.ME | HOME";

    const { loadRequest } = props;
    loadRequest();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeDiv>
      <HeaderHome />
      <main>
        {repositories ? (
          repositories.map((repository, index) => (
            <Card key={index} repository={repository} />
          ))
        ) : (
          <Loading />
        )}
      </main>
    </HomeDiv>
  );
};
