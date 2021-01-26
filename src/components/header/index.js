import { Link } from 'gatsby';
import styled from 'styled-components';
import React, { useCallback, useState } from 'react';

// const ListLink = props => (
//     <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//         <Link to={props.to}>{props.children}</Link>
//     </li>
// )

const Aside = styled.aside`
    margin: auto;
    display: flex;
    padding: 0 1rem;
    max-width: 960px;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 2px solid ${props => props.theme.color};
    h5 {
        margin : 0.5rem 0;
    }
    button {
        margin : 0.5rem ;
        border: 0;
        background-color: transparent;
    }
`;

const Nav = styled.nav`
    margin: 1rem auto;
    max-width: 960px;
    padding: 0 1rem;

    h3 {
        display: inline;
    }
`;

export default () => {
    const [theming, setTheming] = useState('dark_mode');

    const addTheming = useCallback(async () => {
        if (theming === 'light_mode') {
            setTheming('dark_mode');
        } else {
            setTheming('light_mode')
        }
    }, [theming])

    return (
        <header>
            <Aside>
                <h5>IN ENGLISH</h5>
                <button className="material-icons" onClick={addTheming}>
                    {theming}
                </button>
            </Aside>
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