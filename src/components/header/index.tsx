import { graphql } from 'gatsby'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Aside, Flex, Nav } from './styles'

interface Props {
    toggleTheme(): void
}

const Index: React.FC<Props> = ({ toggleTheme }) => {
    const { icon } = useContext(ThemeContext)
    return (
        <>
            <Aside>
                <p>IN ENGLISH</p>
                <button className="material-icons" onClick={toggleTheme}>
                    {icon}
                </button>
            </Aside>

            <Nav>
                <Flex flex={2}>Kaio Gama</Flex>
                <Flex flex={1} justify="flex-end">
                    <a href="https://github.com/kaiogama18">Github</a>
                    <a href="https://www.linkedin.com/in/kaiogama/">linkedin</a>
                </Flex>
            </Nav>
        </>
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
