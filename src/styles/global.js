import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
    display: none;
    font-family: 'Roboto Slab', serif;
  }
  *:focus{
    outline: none;
  }
  }
  :root{
    font-size: 62.5%;
    font-family: 'Roboto Slab', serif;
    -webkit-font-smoothing: antialiased;
  }

  body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    outline: none;
  }
  a{
    text-decoration: none;
  }
  a, button{
    cursor: pointer;
    transition: filter 200ms;
  }
  button:hover, a:hover{
    filter: brightness(0.9);
  }
`