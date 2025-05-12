import { createGlobalStyle } from "styled-components";
import "./fonts.css"

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #74421E;
    --sub-color: #FFF5E5;
    --bg-color: #FFE9CD;
    --content-color: #4F4F4F;
    --action-color: #98BCB4;
    --white-color: #FFFFFF;
  }

  html {
    font-size: 10px;
    font-family: "Noto Sans KR";
    background-color: var(--white-color);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: var(--content-color);
  }

  button {
    border: none;
    background-color: var(--action-color);
    color: var(--white-color);
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 1.4rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  button:active {
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  ol, ul {
    list-style: none;
  }
`

export default GlobalStyle;