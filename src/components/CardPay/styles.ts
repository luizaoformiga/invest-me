import styled from "styled-components";

export const CardPayStyles = styled.div`
  .contentWrapper {
    border-bottom: 2px solid rgba(50, 50, 50, 0.22);
    margin: 30px;
    padding: 30px;
    display: flex;

    font-size: 20px;

    img {
      border-radius: 0.2rem;
      max-width: 164px;
      max-height: 164px;
    }

    button {
      border: none;
      background-color: #ffffff;
    }

    div {
      padding-left: 20px;

      h3 {
        padding-bottom: 30px;
        font-size: 30px;
      }

      a {
        padding-bottom: 10px;
      }
    }

    .conteinerPrices {
      display: flex;
      flex-direction: column;
      margin-left: 500px;
      padding: 25px;

      a {
        padding-bottom: 30px;
      }

      strong {
        font-size: 25px;
      }
    }

    .conteinerButton {
      display: flex;

      align-items: center;
      padding: 0;

      button {
        font-size: 40px;
        padding-left: 20px;
        padding-right: 20px;

        &:hover {
          color: #f44336;
          transition: 0.3s;
        }
      }
    }

    .aiFillDelete {
      font-size: 30px;
      color: grey;
    }
  }
`;
