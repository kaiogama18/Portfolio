import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { Footer, Header, Theme } from "../src/components/index"
import { GlobalStyle } from "../src/styles/styles"

const Main = styled.div`
    display: flex;
    minheight: 70vh;
    padding: 0 1rem;
    max-width: 960px;
    margin: 3rem auto;
`

export function wrapRootElement({ element }) {
    return (
        <Theme>
            <GlobalStyle />
            <Helmet>
                <meta charSet="utf-8" />
                <meta http-equiv="Content-Language" content="pt-br" />
                <meta
                    name="description"
                    content="My personal website portfolio"
                />
                <meta
                    name="keywords"
                    content="portfolio, machine learning, desenvolvimento de aplicativo, desenvolvimento mobile, web design, desenvolvimento iphone, desenvolvimento android, desenvolvimento de site, tecnologia."
                />
                <meta name="author" content="Kaio B. Gama" />
                <link rel="canonical" href="https://kaiogama.com.br/" />
                {/* <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet"/> */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                {/* <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script> */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Kaio Gama | Portfolio</title>
            </Helmet>
            <Header />
            <Main> {element} </Main>
            <Footer />
        </Theme>
    )
}
