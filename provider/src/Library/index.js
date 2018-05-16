/* Modules */
import React, { Component } from 'react'

/* Components */
import LibraryView from './LibraryView';

/* Main render for Library */
export default class extends Component {
  render(){
    return (
        <div>
          <h1>Library</h1>
          <LibraryView />
        </div>
    )
  }
}
