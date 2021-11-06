import styled from "styled-components";

export const WalletComponent = styled.div`
  header {
    background-color: #f44336;
    color: #ffffff;

    display: flex;
    text-align: center;
    align-items: center;

    justify-content: space-between;

    padding: 50px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;

    img {
      width: 500px;
      height: 500px;
      border-radius: 0.2rem;
    }

    h3 {
      font-size: 30px;
      margin-top: 10px;
    }

    h2 {
      font-size: 40px;
      margin-top: 15px;
    }

    .description {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 40px;

      h4 {
        font-size: 20px;
        margin-bottom: 10px;
      }

      p {
        width: 50%;
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    .pay {
      border: none;
      color: #ffffff;
      background-color: #f44336;

      padding: 10px;
      font-size: 30px;

      &:hover {
        color: #f44336;
        background-color: #ffffff;

        transition: 0.5s;
      }
    }

    .adiction {
      border: none;
      color: #f44336;
      background-color: #ffffff;

      padding: 10px;
      font-size: 30px;
    }
  }
`;
