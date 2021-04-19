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
    background: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.text};
    font-family: 'Cormorant', serif, 'Rubik', sans-serif;
    text-rendering: optimizeLegibility;
  }
  `