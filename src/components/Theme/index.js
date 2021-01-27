// import lottie from 'lottie-web';
import styled from 'styled-components'
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'
// import animation from "../../animations/data.json";
// import React, { createRef, useEffect, useState } from 'react'
import React, { useState } from 'react'

const { ThemeProvider } = require('styled-components')

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

    .animation {
        width: 5%;
    }
`;

export default ({ children }) => {
    const [status, setStatus] = useState(light)
    const [icon, setIcon] = useState('dark_mode')

    // let animationContainer = createRef();
    // let animObj = null;
    // useEffect(() => {
    //     lottie.loadAnimation({
    //         container: animationContainer.current,
    //         animationData: animation,
    //         renderer: "svg",
    //         loop: true,
    //         autoplay: false
    //     });
    // }, []);


    const toggleTheme = () => {
        if (status === light) {
            setStatus(dark)
            setIcon('light_mode')
            // animObj.play();
        } else {
            setStatus(light)
            setIcon('dark_mode')
            // animObj.stop();
        }
    }

    return (
        <ThemeProvider theme={status}>

            <Aside>
                {/* <div className="animation-container" ref={animationContainer} /> */}
                <h5>IN ENGLISH</h5>
                {/* <button className="material-icons animation" ref={animationContainer} onClick={toggleTheme} /> */}
                <button className="material-icons" onClick={toggleTheme}>
                    {icon}
                </button>
            </Aside>
            {children}
        </ThemeProvider>

    )

}






