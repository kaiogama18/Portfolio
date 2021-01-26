import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '../src/styles/styles';
import { Header, Footer, Theme } from '../src/components/index';

export function wrapRootElement({ element }) {
    return (
        <Theme>
            <GlobalStyle />
            <Helmet>
                <meta charSet="utf-8" />
                <meta http-equiv="Content-Language" content="pt-br" />
                <meta name="description" content="My personal website portfolio" />
                <meta name="keywords" content="portfolio, machine learning, desenvolvimento de aplicativo, desenvolvimento mobile, web design, desenvolvimento iphone, desenvolvimento android, desenvolvimento de site, tecnologia." />
                <meta name="author" content="Kaio B. Gama" />
                <link rel="canonical" href="https://kaiogama.com.br/" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Kaio Gama | Portfolio</title>
            </Helmet>
            <Header />
            <div style={{ margin: `3rem auto`, maxWidth: 960, padding: `0 1rem` }}>
                {element}
            </div>
            <Footer />
        </Theme>
    )
}
