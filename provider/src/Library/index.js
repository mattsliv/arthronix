import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import LibraryView from './LibraryView';


export default class extends Component {
  render(){
    return (
      <Router>
        <div>
          <h1>Library Page</h1>
          <LibraryView />
        </div>
      </Router>
    )
  }
}
