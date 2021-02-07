import React from 'react';
import { Header, Footer, Theme } from '../src/components/index';

export function wrapRootElement({ element }) {
    return (
        <Theme>
                <Header />
                {element} 
                <Footer />
        </Theme>
    )
}
