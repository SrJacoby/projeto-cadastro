import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
        transition: all 0.25s linear;
    }

    input, button{
        transition: background-color 0.25s linear, color 0.25 linear;
    }
`