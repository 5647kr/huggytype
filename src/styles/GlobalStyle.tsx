import { createGlobalStyle } from "styled-components";
import "./fonts.css"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    font-family: "Noto Sans KR";
  }

  :root {
    --black-color: #000;
    --white-color: #fff;
    --font-rw: 400;
    --font-bw: 700;
  }

  ul, li {
    list-style: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    display: block;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: var(--font-rw);
  }

  @media screen and (max-width: 480px) {
    :root {
      --font-sz: 1.2rem;
      --font-smz: 1.4rem;
      --font-mz: 1.6rem;
      --font-lz: 1.8rem;
      --font-xlz: 2rem;
      --font-2xlz: 2.2rem;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    :root {
      --font-sz: 1.4rem;
      --font-smz: 1.6rem;
      --font-mz: 1.8rem;
      --font-lz: 2rem;
      --font-xlz: 2.2rem;
      --font-2xlz: 2.4rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    :root {
      --font-sz: 1.6rem;
      --font-smz: 1.8rem;
      --font-mz: 2rem;
      --font-lz: 2.2rem;
      --font-xlz: 2.4rem;
      --font-2xlz: 2.6rem;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    :root {
      --font-sz: 1.8rem;
      --font-smz: 2rem;
      --font-mz: 2.2rem;
      --font-lz: 2.4rem;
      --font-xlz: 2.6rem;
      --font-2xlz: 2.8rem;
    }
  }

  @media screen and (min-width: 1441px) {
    :root {
      --font-sz: 2rem;
      --font-smz: 2.2rem;
      --font-mz: 2.4rem;
      --font-lz: 2.6rem;
      --font-xlz: 2.8rem;
      --font-2xlz: 3rem;
    }
  }
`

export default GlobalStyle;