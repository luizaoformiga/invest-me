import styled from "styled-components";
import { colors } from "../../styles/colors";

export const CardPayStyles = styled.div`
  border-bottom: 2px solid rgba(50, 50, 50, 0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  img {
    width: 100px;
  }

  .contentDescription {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      width: 50%;
      font-size: 30px;
      text-align: center;
      margin: 8px 8px;
    }

    p {
      font-size: 20px;
    }

    .conteinerButton {
      button {
        padding: 20px 40px 20px 40px;
        margin: 20px 20px 20px 22px;
        font-size: 20px;

        border: none;
        border-radius: 0.2rem;
        background-color: ${colors.orange};
        color: ${colors.white};

        &:hover {
          background-color: ${colors.white};
          color: ${colors.orange};

          transition: 0.3s;
        }
      }
    }
  }

  .aiFillDelete {
    font-size: 30px;
    color: ${colors.grey};
  }

  .conteinerPrices {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    align-items: center;

     strong {
       font-size: 20px;
     }

    .aiFillDelete {
      font-size: 40px;
      margin: 20px;
    }
  }
`;
