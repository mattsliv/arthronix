import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './App'

// Render app to DOM
render((
  <Router>
    <App />
  </Router>),
   document.getElementById('root'))

// Service worker for cache speedup
registerServiceWorker();
