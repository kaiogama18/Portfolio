import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    margin: auto;
    padding: 0 1rem;
    max-width: 960px;
    text-align: center;
    border-top: 2px solid ${props => props.theme.color};
    h5 {
        margin : 0.5rem;
    }
`;


export default () => {
    return (
        <Footer>
            <h5>
            Copyright 2021 Kaio B. Gama - Todos os direitos reservados
            </h5>
        </Footer>
    )
}