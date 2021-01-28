import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        // margin: 0;
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.color}
    }

    h1, h2, h3, h4, h5, h6, button, a {
        margin: 0;
        color: ${props => props.theme.color}
    }

    a {
        text-shadow: none;
        background-image: none;
    }
   
`;

