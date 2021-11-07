import styled from "styled-components";
import { colors } from "../../styles/colors";

export const HomeDiv = styled.div`
  height: 100vh;
  width: 100%;

  header {
    background-color: ${colors.orange};
    color: ${colors.white};

    display: flex;
    text-align: center;
    align-items: center;

    justify-content: flex-end;

    padding: 50px;

    h2 {
      font-size: 40px;
      padding-right: 500px;
    }

    div {
      display: flex;
      justify-content: flex-end;
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
