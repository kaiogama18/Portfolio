import { graphql, Link, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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

const Flex = styled.div`
    display: flex;
    flex: ${({ flex }) => flex};
    justify-content: ${({ justify }) => justify};
`

const Header = ({ title }) => {
    const { site } = useStaticQuery(query)
    const { defaultTitle, social } = site.siteMetadata

    const header = {
        title: title || defaultTitle,
        social: social
    }

    return (
        <Nav>
            <Flex flex={2}>
                <Link to="/">
                    <h3>{header.title}</h3>
                </Link>
            </Flex>
            <Flex flex={1} justify="flex-end">
                {social.map(
                    (link: {
                        url: string | undefined
                        name: {} | null | undefined
                    }) => (
                        <a href={link.url} key={link.name}>
                            {link.name}
                        </a>
                    )
                )}
            </Flex>
        </Nav>
    )
}

export default Header

Header.propTypes = {
    title: PropTypes.string,
    social: PropTypes.array
}

Header.defaultProps = {
    title: null,
    social: []
}

const query = graphql`
    query Header {
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
