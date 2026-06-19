import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { mediaMaxDesktop1024, mediaMaxMobile } from "@/lib/media-query";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: var(--font-lato);
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }



  html, body, #__next {
    height: 100%;
    background-color: ${theme.darkBlack};
    color: ${theme.white};
    scrollbar-color: ${theme.jagger} ${theme.darkBlack};
  }

  body {
    position: relative;
    overflow-x: hidden;

    ${mediaMaxDesktop1024`
    --default-padding: 8rem;`}
  }


  html {
    font-size: calc(100vw / 1920 * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    ${mediaMaxDesktop1024`
      font-size: calc(100vw / 1024 * 10);
    `}

    ${mediaMaxMobile`
      font-size: calc(100vw / 599 * 10);
    `}
  }


  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  input, textarea {
    appearance: none;
    border: none;
    outline: none;
  }

  :root {
    --default-padding: 20rem;
  }


`;
