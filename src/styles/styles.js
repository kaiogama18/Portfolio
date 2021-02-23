import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    body {
        // margin: 0;
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.color};
        font-family:'Roboto Mono';
    }

    h1, h2, h3, h4, h5, h6, button, a {
        margin: 0;
        color: ${props => props.theme.color}
    }

    a {
        text-shadow: none;
        background-image: none;
    }

`

export const Space = styled.div`
    height: ${({ height }) => height}px;
`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .flag {
        width: 290px;
        height: 15vh;
        display: grid;
        padding: 0.5rem;
        margin: 0.5rem 0;
        grid-template-columns: auto 1fr;
        grid-column-gap: var(--flag-gap, 1em);
        border: 2px solid ${props => props.theme.color};
        grid-template-rows: repeat(3, minmax(min-content, max-content)) 1fr;
        grid-template-areas:
            "signifier ."
            "signifier title"
            "signifier content"
            ". content";
    }

    .flag__title {
        margin-bottom: 0.5rem;
        grid-area: title;
        align-self: center;
        display: flex;
        align-items: center;

        &:empty {
            grid-column: 1;
            grid-row: 2;

            &:after {
                content: "x";
                visibility: hidden;
            }

            ~ .flag__content {
                grid-row-start: 2;
            }
        }
    }

    .flag__content {
        grid-area: content;
    }
`
