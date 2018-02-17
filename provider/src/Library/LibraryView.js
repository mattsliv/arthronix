import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class SupportRow extends Component {
  render() {
    return (
      <div>
        <table>
          <tr padding="20px">
            <td><h3>Educational Support</h3></td>
            <td>
              <button type="button" class="btn btn-info" >
                + Add New
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-info" >
                Expand All
              </button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

class VideoRow extends Component {
  render() {
    return (
      <div>
        <table>
          <tr padding="20px">
            <td><h3>Videos</h3></td>
            <td>
              <button type="button" class="btn btn-info" >
                + Add New
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-info" >
                Expand All
              </button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

class BundleRow extends Component {
  render() {
    return (
      <div>
        <table>
          <tr padding="20px">
            <td><h3>Bundles</h3></td>
            <td>
              <button type="button" class="btn btn-info" >
                + Add New
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-info" >
                Expand All
              </button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

class LibraryTable extends Component {
  render() {
    return (
      <Router>
        <div>
          <BundleRow />
          <VideoRow />
          <SupportRow />
        </div>
      </Router>


    )
  }
}

export default LibraryTable;
