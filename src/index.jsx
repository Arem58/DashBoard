import React from 'react'
import ReactDOM from 'react-dom'

import App from './componentes/app/App'

const root = document.getElementById('root')

ReactDOM.hydrate(
    <App />, 
    root,
)