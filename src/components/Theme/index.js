import React, { useState } from 'react'
import styled from 'styled-components'
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

const { ThemeProvider } = require('styled-components')

const Aside = styled.article`
    margin: auto;
    display: flex;
    padding: 0 1rem;
    max-width: 960px;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 2px solid ${props => props.theme.color};
    h5 {
        margin: 0.5rem 0;
    }
    button {
        margin: 0.5rem;
        border: 0;
        background-color: transparent;
    }

    .animation {
        width: 5%;
    }
`

export default ({ children }) => {
    const [status, setStatus] = useState(light)
    const [icon, setIcon] = useState('dark_mode')

    const toggleTheme = () => {
        if (status === light) {
            setStatus(dark)
            setIcon('light_mode')
        } else {
            setStatus(light)
            setIcon('dark_mode')
        }
    }

    return (
        <ThemeProvider theme={status}>
            <Aside>
                <p>IN ENGLISH</p>
                <button className="material-icons" onClick={toggleTheme}>
                    {icon}
                </button>
            </Aside>
            {children}
        </ThemeProvider>
    )
}
