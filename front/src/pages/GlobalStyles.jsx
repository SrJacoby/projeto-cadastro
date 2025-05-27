import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body{
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
        transition: all 0.25s linear;
    }

    input, button{
        transition: background-color 0.25s linear, color 0.25 linear;
    }
`