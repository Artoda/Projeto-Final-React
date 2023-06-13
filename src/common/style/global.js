import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
        --primary-color: #737070;
        --secondary-color: rgba(0, 0, 0, 0.7);
        --terciary-color: rgba(255, 255, 255, 1);

        --alert-color: rgba(203, 18, 28, 0.8);
        --text-button-color: rgba(255, 255, 255, 1);

        --bg-color: rgba(248, 248, 248, 1);
        --bg-button: rgba(203, 18, 28, 0.7);
        --bg-header: rgba(233, 213, 213, 1);
        --bg-box: rgba(255, 255, 255, 1);
        --bg-card-hover: rgba(0, 0, 0, 0.9);


        font-family: Inter, sans-serif;
        line-height: 1.5;
        font-weight: 400;
        color: var( --secondary-color);
        background-color: var(--bg-color);
        height: 100%;
    }

    #root {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        height: 100%;
    }

    .icon {
        font-size: 22px;
    }

    h1 {

    }

    h2 {
        padding: 20px 0;
        color: var(--primary-color);
    }

    h3 {
        color: var(--primary-color);
        font-size: 14px;
    }

    span {
        color: var(--primary-color);
        font-size: 12px;
    }

    a {
        text-decoration: none;
    }
    span .alert {
        color: var(--alert-color);
    }

    /* Chrome, Edge, and Safari */

    *::-webkit-scrollbar {
    display: none;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    

    body:html {


    }
    body {
        width: 100%;
        height: 100%;
    }

    h1 {
    font-size: 3.2em;
    line-height: 1.1;
    }`;
