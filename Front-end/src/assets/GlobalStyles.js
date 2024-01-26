import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;      
    padding: 0;     
  }

  html, body {
    height: 100%;  
  }

  body {
    font-family: 'Inter', sans-serif;
    background-image: url('fundo.svg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
  }

  html {
    background: url('fundo.svg') no-repeat center center / cover; 
  }
`;

export default GlobalStyles;
