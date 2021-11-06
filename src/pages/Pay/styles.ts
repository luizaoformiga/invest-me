import styled from "styled-components";
import { colors } from "../../styles/colors";

export const PayDiv = styled.div`
  header {
    background-color: ${colors.orange};
    color: ${colors.white};

    display: flex;
    text-align: center;
    align-items: center;

    padding: 50px;

    h2 {
      font-size: 40px;
      margin-left: 350px;
    }
  }

  main {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;

    button {
      border: none;
      background-color: ${colors.white};
      color: ${colors.orange};

      font-size: 30px;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 20px;

    .finalization {
      background-color: ${colors.orange};
      color: ${colors.white};
      border: none;
      font-size: 30px;
      padding: 10px;
      margin-bottom: 20px;

      &:hover {
        background-color: ${colors.white};
        color: ${colors.orange};

        transition: 0.5s;
      }
    }

    .eraseCar {
      background-color: ${colors.white};
      color: ${colors.orange};
      border: none;
      font-size: 30px;

      &:hover {
        background-color: ${colors.white};
        color: ${colors.orange};

        transition: 0.5s;
      }
    }
  }
`;
