import { Link } from 'gatsby'
import lottie from 'lottie-web'
import React, { createRef, useEffect } from 'react'
import styled from 'styled-components'
import animation from '../animations/404.json'

const NotFound = styled.div`
    display: flex;
    flex: 1;
    text-align: center;
    align-items: center;
    flex-direction: column;
`

const Animation = styled.div`
    width: 80%;
`

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `0` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default () => {
    let animationContainer = createRef()

    useEffect(() => {
        lottie.loadAnimation({
            container: animationContainer.current,
            animationData: animation,
            renderer: 'svg',
            loop: true,
            autoplay: true
        })
    }, [animationContainer])

    return (
        <NotFound>
            <Animation
                ref={animationContainer}
                alt="Img in svg Pixels of 404 error"
            />
            <h3>Página não encontrada</h3>
            <p>Parece que a página que você estava procurando não existe.</p>
            <ListLink to="/">VOLTAR PARA PÁGINA INICIAL</ListLink>
        </NotFound>
    )
}
