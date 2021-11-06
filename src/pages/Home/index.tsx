import React, { useEffect } from "react";

import { Repository } from "../../store/ducks/repositories/types";

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

export const Home: React.FC<Props> = (props) => {
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

