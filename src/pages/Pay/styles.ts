import styled from "styled-components";

export const PayDiv = styled.div`
  header {
    background-color: #f44336;
    color: #ffffff;

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
      background-color: #ffffff;
      color: #f44336;

      font-size: 30px;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 20px;

    .finalization {
      background-color: #f44336;
      color: #ffffff;
      border: none;
      font-size: 30px;
      padding: 10px;
      margin-bottom: 20px;

      &:hover {
        background-color: #ffffff;
        color: #f44336;

        transition: 0.5s;
      }
    }

    .eraseCar {
      background-color: #FFFFFF;
      color: #f44336;
      border: none;
      font-size: 30px;

      &:hover {
        background-color: #ffffff;
        color: #f44336;

        transition: 0.5s;
      }
    }
  }
`;
