import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    padding: 0.5rem 0 ;
    align-items: center;
    text-transform: uppercase;

    a {
        padding: 0 10px;
        font-weight: 600;
        text-decoration: none;
        color: ${(props: { theme: { colors: any } }) =>
            props.theme.colors.link};

        &:hover {
            content: '';
            color: ${(props: { theme: { colors: any } }) =>
                props.theme.colors.hover.link};
        }
    }
`

export const Aside = styled.article`
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid ${props => props.theme.colors.text};
    button {
        margin-left: 0.5rem;
        border: 0;
        background-color: transparent;
    }
`

export type FlexProps = {
    flex: keyof number
    justify?: keyof string
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex: ${(props: { flex: any }) => props.flex};
    justify-content: ${(props: { justify: any }) => props.justify};
`
