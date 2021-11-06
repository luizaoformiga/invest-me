import React from "react";
import { CircularProgress } from "react-cssfx-loading";
import { LoadingStyles } from "./styles";

export const Loading: React.FC = () => {
  return (
    <LoadingStyles>
      <CircularProgress
        color="#FF0000"
        width="100px"
        height="100px"
        duration="3s"
      />
    </LoadingStyles>
  );
};
