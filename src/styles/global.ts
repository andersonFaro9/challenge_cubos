import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #FFFF;
    -webkit-font-smoothing: antialiased;

  }

  body , button, input{
    font: 22px  Abel, Lato, sans-serif;

  }

  #root {
    flex: 1;
    text-align:center;
    max-width: 960px;
    margin: 0 auto;
  }
`;
