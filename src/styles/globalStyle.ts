import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html, body, #__next {
    width: 100%;
    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%;
    line-height: 1;
  }
  
  body {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }
  
  button {
    outline: none;
  }
`
