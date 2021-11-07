import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`;
