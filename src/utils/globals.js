import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{
    font-size:16 px;
    box-sizing: border-box;
    --clr-white: ${props => props.theme.colors.white};
    --clr-red: ${props => props.theme.colors.red};
    --clr-black: ${props => props.theme.colors.black};
    --clr-blue: ${props => props.theme.colors.blue};
    --clr-background: ${props => props.theme.colors.background};
  }

  body{
    font-family: 'Poppins' , sans-serif;
    line-height: 1.6;
    color: var(--clr-white);
  }

  form,
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

`;
