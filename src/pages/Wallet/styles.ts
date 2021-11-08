import styled from "styled-components";
import { colors } from "../../styles/colors";

export const WalletDiv = styled.div`
  header {
    background-color: ${colors.orange};
    color: ${colors.white};

    display: flex;
    justify-content: space-between;

    padding: 50px;
  }

  main {
    display: flex;
    flex-wrap: wrap;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    margin: auto;
    padding: 50px;
    border-radius: 0%.2rem;

    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.5);

    img {
      margin: 8px;
    }

    button {
      background-color: ${colors.orange};
      color: ${colors.white};
      border-radius: 0.2rem;
      border: none;

      padding: 10px;
      font-size: 16px;
      margin: 8px;

      &:hover {
        color: ${colors.orange};
        background-color: ${colors.white};
        transition: 0.3s;
      }
    }
  }
`;
