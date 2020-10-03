import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing:inherit;
    }
  }

  body {
    font-family: Abel, Lato, sans-serif;
    background: #FFFF;
  }

  body, button, input{
    font-size: 22px;
  }
`;
