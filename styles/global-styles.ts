import { createGlobalStyle } from "styled-components"

const MyGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  a, h1, h2, h3, h4, h5, h6, p {
    font-family: Poppins;
    font-weight: lighter;
  }

  :root {
  --primary: #8F79EB;
  --secondary: #333333;
  --tertiary: #F7F7F7;
}
`;

export default MyGlobalStyle;
