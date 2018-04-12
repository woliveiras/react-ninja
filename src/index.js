// const ReactDOM = require('react-dom')
// const React = require('react')
// const Title = require('./app')

// ReactDOM.render(
//     React.createElement(Title), 
//     document.querySelector('[data-js="app"]')
// )

import App from './app'
import React from 'react'
// import ReactDOM from 'react-dom'
// With short handler notation
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { INSPECT_MAX_BYTES } from 'buffer';

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default

        renderApp(NextApp)
    })
}