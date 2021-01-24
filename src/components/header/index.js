import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Aside = styled.aside`
    margin: auto;
    padding: 0 1rem;
    max-width: 960px;
    text-align: right;
    border-bottom: 2px solid black;
`;

const Nav = styled.nav`
    margin: 1rem auto;
    max-width: 960px;
    padding: 0 1rem;
`;


export default () => {
    return (
        <header>
            <Aside>
                <h5>IN ENGLISH</h5>
            </Aside>
            <Nav>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3 style={{ display: `inline` }}>Kaio Gama</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="https://github.com/kaiogama18">Github</ListLink>
                    <ListLink to="https://www.linkedin.com/in/kaiogama/">Linkedin</ListLink>
                </ul>
            </Nav>
        </header>
    )
}