// const ReactDOM = require('react-dom')
// const React = require('react')
// const Title = require('./app')

// ReactDOM.render(
//     React.createElement(Title), 
//     document.querySelector('[data-js="app"]')
// )

import Title from './app'
import React from 'react'
// import ReactDOM from 'react-dom'
// With short handler notation
import { render } from 'react-dom'

render(
    <Title />, 
    document.querySelector('[data-js="app"]')
)