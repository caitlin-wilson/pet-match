import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: 'Cormorant', serif, 'Rubik', sans-serif;
    text-rendering: optimizeLegibility;
  }

  button {
    width: 190px;
    background-color: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    font-family: 'Rubik', sans-serif;
  }

  button:hover {
    background-color: ${({ theme }) => theme.primaryhover};
  }
`