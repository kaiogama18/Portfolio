import React from 'react'
// import { Provider } from 'react-redux'
// import createStore from './src/store'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

// let store = null

export { wrapRootElement } from './gatsby/wrapRootElement'
export const replaceRenderer = ({
    element,
    replaceBodyHTMLString,
    setHeadComponents
}) => {
    const sheet = new ServerStyleSheet()
    // store = createStore()

    const app = () => (
        // <Provider store={store}>
        <StyleSheetManager sheet={sheet.instance}>
            {wrapRootElement}
        </StyleSheetManager>
        // </Provider>
    )
    replaceBodyHTMLString(renderToString(<app />))
    setHeadComponents([sheet.getStyleElement()])
}
