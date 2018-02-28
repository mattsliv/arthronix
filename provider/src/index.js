import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './App'

// import 'styles/docs/assets/js/jquery.min.js';
// import 'styles/docs/assets/js/popper.min.js';
// import 'styles/docs/assets/js/chart.js';
// import 'styles/docs/assets/js/tablesorter.min.js';
// import 'styles/docs/assets/js/toolkit.js';
// import 'styles/docs/assets/js/application.js';

// Render app to DOM
render((
  <Router>
    <App />
  </Router>),
   document.getElementById('root'))

// Service worker for cache speedup
registerServiceWorker();
