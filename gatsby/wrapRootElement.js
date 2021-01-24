import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import light from '../src/styles/themes/light';

const { ThemeProvider } = require('styled-components');

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem`}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export function wrapRootElement({ element }) {
    return <ThemeProvider theme={light}  >
        <Helmet>
            <meta charSet="utf-8" />
            <meta http-equiv="Content-Language" content="pt-br" />
            <meta name="description" content="My personal website portfolio" />
            <meta name="keywords" content="portfolio, machine learning, desenvolvimento de aplicativo, desenvolvimento mobile, web design, desenvolvimento iphone, desenvolvimento android, desenvolvimento de site, tecnologia." />
            <meta name="author" content="Kaio B. Gama" />
            <link rel="canonical" href="http://kaiogma.com.br/" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Kaio Gama | Portfolio</title>
        </Helmet>
        {/* <Header /> */}
        <div style={{ margin: `3rem auto`, maxWidth: 960, padding: `0 1rem` }}>


            <header style={{ marginBottom: `1.5rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3 style={{ display: `inline` }}>Kaio Gama</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="https://github.com/kaiogama18">Github</ListLink>
                    <ListLink to="https://www.linkedin.com/in/kaiogama/">Linkedin</ListLink>
                </ul>
            </header>

            {element}
        </div>
        {/* <Footer /> */}
    </ThemeProvider>
}
