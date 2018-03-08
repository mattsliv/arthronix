import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class BundleMatrix extends Component {

  render() {
    return (
      <div>
        <h1>Create Bundle</h1>
          <div class = "table-responsive">
            <table id="bundleTable" class="table" data-sort="table">
            <thead>
              <tr>
                <th>Select</th>
                <th>Exercise Name</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody class="dash-table">
              <tr>
                <td>
                <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true}/>
            L
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            M
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            H
          </label>
        </div>
      </form>
                </td>

              </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}

export default BundleMatrix;
