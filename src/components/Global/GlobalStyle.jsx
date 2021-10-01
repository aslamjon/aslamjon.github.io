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
        display: none;
    }
    .chatCopyright_d4f7.__chat_a666 {
        .text_2bc3 {
            display: none !important;
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