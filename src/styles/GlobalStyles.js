import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .container {
      padding: 10px;
    }
  }
`;

export default GlobalStyles;
