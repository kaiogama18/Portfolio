import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
    margin-top: 3rem;
    text-align: center;
    border-top: 2px solid ${props => props.theme.color};

    p {
        margin: 0.5rem;
    }
`

export default () => {
    return (
        <Footer>
            <p>Copyright 2021 Kaio B. Gama - Todos os direitos reservados</p>
        </Footer>
    )
}
