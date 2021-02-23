import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;

        background-color: ${(props: { theme: { colors: { background: any } } }) => props.theme.colors.background};

        color: ${(props: { theme: { colors: any } }) => props.theme.colors.text};
        font-family:'Roboto Mono';
    }

    h1, h2, h3, h4, h5, h6, button, a {
        color: ${(props: { theme: { colors: any } }) => props.theme.colors.text}
    }

    a {
        text-shadow: none;
        background-image: none;
    }

    li {
        margin: 10px 0;
    }
`

export const Space = styled.div`
    height: ${({ height }) => height + 'px'};
    /* height: ${(height: { height: any }) => height}; */
`
