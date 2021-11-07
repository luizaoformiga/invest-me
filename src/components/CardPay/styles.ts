import styled from "styled-components";
import { colors } from "../../styles/colors";

export const CardPayStyles = styled.div`
  .contentWrapper {
    border-bottom: 2px solid rgba(50, 50, 50, 0.22);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .contentImage {
      img {
        width: 50px;
        height: auto;
      }
    }

    .contentDescription {
      display: flex;
      flex-direction: column;
      
      align-items: left;

      h3 {
        font-size: 22px;
        margin-bottom: 4px;
      }

      p {
        font-size: 20px;
        margin-bottom: 10px;
      }

      button {
        background-color: ${colors.orange};
        color: ${colors.white};

        border: none;
        border-radius: 0.2rem;
        box-shadow: 7px 7px 7px rgba(50, 50, 50, 0.22);

        padding: 4px;
        margin-right: 4px;
        margin-top: 4px;

        font-size: 20px;

        &:hover {
          color: ${colors.orange};
          background-color: ${colors.white};
          transition: 0.5s;
        }
      }
    }

    .conteinerPrices {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .aiFillDelete {
      font-size: 30px;
      color: ${colors.grey};
    }
  }
`;
