import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
        font-family: 'Roboto', sans-serif;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    .logoIcon_f494 {
        display: none !important;
    }
    .chatCopyright_d4f7.__chat_a666 {
        display: none !important;
        .text_2bc3 {
        }
    }
    .controlButtons {
        display: flex;
        align-items: center;
        background: #333;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 100%;
        height: 20px;
        padding-left: 5px;
        z-index: 1;
        div {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin: 0 0 0 5px;
            cursor: pointer;
        }
        &__close {
            background: #fb655e;
        }
        &__maximize {
            background: #fdbc3e;
        }
        &__minimize {
            background: #00c653;
        }
    }
`;

const GlobalStyle = ({children}) => {
    return <ThemeProvider theme={{dark: false}}>
        <GlobalStyled/>
        {children}
    </ThemeProvider>
}
export default GlobalStyle;