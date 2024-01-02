import { createGlobalStyle } from "styled-components";
import background from "../assets/background.png";

export default createGlobalStyle`

    *, *::before, *::after {
      box-sizing: border-box;
    }
    
    * {
      margin: 0;
      padding: 0;

      -webkit-font-smoothing : antialiased;
      -moz-osx-font-smoothing: grayscale;

      font: inherit;
    }

    :root {
      font-size        : 62.5%;
      scroll-behavior: smooth;
    }
    
    img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        font-style: italic;
        background-repeat: no-repeat;
        background-size: cover;
        shape-margin: 0.75rem;
    }

    body {
      position: relative;
      background: linear-gradient(90deg, rgba(47,14,89,1) 0%, rgba(71,28,125,1) 10%, rgba(71,28,125,1) 50%, rgba(71,28,125,1) 90%, rgba(47,14,89,1) 100%);
    }
    
    body::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${background});
        z-index: -1;
   }
   
    h1 {
        font-family: ${({theme}) => theme.FONTS.FONT_MAIN};
        font-size: 4rem;
    }

    .bullet {
      font-family: ${({theme}) => theme.FONTS.FONT_BULLET};
    }

    a, p {
      font-family: ${({theme}) => theme.FONTS.FONT_INNER};

      text-decoration: none;
      color: inherit;
    }

    ul {
      list-style: none;
    }

    button, a {
        border: none;
        background: transparent;
        
        cursor: pointer;
        transition: filter 0.2s;
    }

   a:hover {
        filter: brightness(0.6);
    }
`