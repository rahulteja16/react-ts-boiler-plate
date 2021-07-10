import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./ThemeProvider";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
 body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default GlobalStyles;
