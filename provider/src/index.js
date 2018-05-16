/* Modules */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

/* Component */
import App from './App'

/* Main render of app to DOM */
render((
  <Router>
    <App />
  </Router>),
   document.getElementById('root'))
