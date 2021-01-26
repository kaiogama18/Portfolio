import { Link } from 'gatsby';
import styled from 'styled-components';
import React from 'react';

const Nav = styled.nav`
    margin: 1rem auto;
    max-width: 960px;
    padding: 0 1rem;
    

    h3 {
        display: inline;
    }

    a {
        margin-right: 1rem;
    }
`;

export default () => {
    return (
        <header>

            <Nav>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3>Kaio Gama</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <a href="https://github.com/kaiogama18">Github</a>
                    <a href="https://www.linkedin.com/in/kaiogama/">Linkedin</a>
                </ul>
            </Nav>
        </header>
    )
}