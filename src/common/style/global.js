import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        height: 100%;
    }

    #root {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
    display: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        width: 100vw;
        margin: 0 auto;
        display: flex;
        min-width: 320px;
        width: 100%;
        height: 100%;
    }

    h1 {
    font-size: 3.2em;
    line-height: 1.1;
    }

   

    @media (prefers-color-scheme: light) {
    :root {
        color: #213547;
        background-color: #ffffff;
    }

    a:hover {
        color: #747bff;
    }

  
    }`;
