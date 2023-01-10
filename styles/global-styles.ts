import { createGlobalStyle } from "styled-components"

const MyGlobalStyle = createGlobalStyle`
  :root {
    --primary: #8F79EB;
    --secondary: #333333;
    --tertiary: #F7F7F7;
    --background: #fcfcfc;
    --font: black;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --secondary: white;
      --tertiary: #202836;
      --background: #111827;
      --font: white;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--background);
  }

  a, h1, h2, h3, h4, h5, h6 {
    font-family: Poppins;
    font-weight: lighter;
    line-height: 1;
    color: var(--font);
  }

  p {
    font-family: Poppins;
    font-weight: lighter;
    line-height: 1.4;
    color: var(--font);
  }
`;

export default MyGlobalStyle;
