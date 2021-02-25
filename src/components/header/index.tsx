import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                defaultTitle: string
                social: {
                    name: string
                    url: string
                }
            }
        }
    }
}

export type FlexProps = {
    flex: keyof number
    justify?:keyof  string
}

const Nav = styled.nav`
    display: flex;
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

export const Flex = styled.div<FlexProps> `
    display: flex;

    flex: ${(props: { flex: any }) => props.flex};
    /* justify-content: flex-end; */
    justify-content: ${(props: {justify: any}) => props.justify};

`

const Index: React.FC<IndexPageProps> = () => {
    return (
        <Nav>
            <Flex flex={2}>Kaio Gama</Flex>
            <Flex flex={1} justify="flex-end">
                <a href="https://github.com/kaiogama18">Github</a>
                <a href="https://www.linkedin.com/in/kaiogama/">linkedin</a>
            </Flex>
        </Nav>
    )
}

export default Index

export const pageQuery = graphql`
    query IndexQuerys {
        site {
            siteMetadata {
                defaultTitle: title
                social {
                    name
                    url
                }
            }
        }
    }
`
