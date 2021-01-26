import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        // margin: 0;
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.color}
    }

    // * {
    // box-sizing: border-box;
    // }

    h1, h2, h3, h4, h5, h6, button, a {
        color: ${props => props.theme.color}
    }

    a {
        text-shadow: none;
        background-image: none;
        margin-right: 1rem;
    }
   
`;

