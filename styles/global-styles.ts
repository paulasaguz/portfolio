import { createGlobalStyle} from "styled-components"

const MyGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  :root {
  --primary: #8F79EB;
  --secondary: #333333;
  --tertiary: #F7F7F7;
}
`;

export default MyGlobalStyle;
