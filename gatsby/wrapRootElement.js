import React from 'react'
import styled from 'styled-components'
import { Footer, Header, Theme } from '../src/components/index'
import { GlobalStyle, Space } from '../src/styles/styled'

const Layout = styled.body`
    max-width: 960px;
    margin: 1rem auto 0;

    @media screen and (max-width: 600px) {
        margin: 2rem;
    }

    @media screen and (max-width: 992px) {
        margin: 1rem;
    }
`

export function wrapRootElement({ element }) {
    return (
        <Theme>
            <GlobalStyle />
            <Layout>
                <Header />
                {element}
                <Space height={30} />
                <Footer />
            </Layout>
        </Theme>
    )
}
