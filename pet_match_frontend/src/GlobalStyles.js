import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: 'Cormorant', serif;
    text-rendering: optimizeLegibility;
  }

  button, .submit {
    background-color: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.white};
    padding: 15px 50px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    font-family: 'Rubik', sans-serif;
  }

  .button-inverse {
    background-color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  button:hover, .submit:hover {
    background-color: ${({ theme }) => theme.primaryhover};
  }
  
`