import React, { ReactChild, ReactFragment, ReactPortal } from 'react'
import styled, { DefaultTheme, ThemeProvider } from 'styled-components'
import { Footer, Header } from '..'
import { GlobalStyle } from '../../styles/global'
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'
import usePersistedState from '../../utils/usePersistedState'

const Layout = styled.body`
    max-width: 960px;
    margin: 1rem auto 0;
    @media screen and (max-width: 600px) {
        margin: 2rem;
    }
    @media screen and (max-width: 992px) {
        margin: 1rem;
    }
`

interface AuxProps {
    children:
        | ReactChild
        | ReactFragment
        | ReactPortal
        | boolean
        | null
        | undefined
}

const Theme: React.FC = ({ children }: AuxProps) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

    const toggleTheme = () => {
        setTheme(theme.title == 'light' ? dark : light)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <Header toggleTheme={toggleTheme} />
                {children}
                <Footer />
            </Layout>
        </ThemeProvider>
    )
}
export default Theme
