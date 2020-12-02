import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(p) => p.theme.mainGray};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* font-family: 'Staatliches', cursive; */
    font-family: 'Noto Sans JP', sans-serif;
  }

  img {
    display: block;
    width: 100%;
  }

  ul {
    list-style: none;
  }
`
