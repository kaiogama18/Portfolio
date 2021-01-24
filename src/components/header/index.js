import React from 'react';
import { Link } from 'gatsby';


const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default () => {
    return (
        <header style={{ marginBottom: `1.5rem` }}>
            <nav style={{ margin: `3rem auto`, maxWidth: 960, padding: `0 1rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3 style={{ display: `inline` }}>Kaio Gama</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="https://github.com/kaiogama18">Github</ListLink>
                    <ListLink to="https://www.linkedin.com/in/kaiogama/">Linkedin</ListLink>
                </ul>
            </nav>
        </header>
    )
}