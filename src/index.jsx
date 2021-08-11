import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

const root = document.getElementById('root')

ReactDOM.hydrate(
    <App />, 
    root,
)