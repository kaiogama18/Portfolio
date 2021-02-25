import React from 'react'
import { Theme } from '../src/components/index'

export function wrapRootElement({ element }) {
    return <Theme>{element}</Theme>
}
