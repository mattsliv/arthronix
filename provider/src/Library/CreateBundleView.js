import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class RadioBox extends Component {

  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.state = {
      selectedOption: 'option1'
    }
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  render(){
    return (
    <form>
      <div className="radio">
        <label>
          <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
          L
        </label>
      </div>
      <div className="radio">
        <label>
        <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} />
          M
        </label>
      </div>
      <div className="radio">
        <label>
        <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange} />
          H
        </label>
      </div>
    </form>
   )
  }
}

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
                <td><RadioBox radio/></td>
                <td><p>Leg Stretch</p></td>
                <td><p>3</p></td>
                <td><p>5</p></td>
              </tr>
              <tr>
                <td><RadioBox radio/></td>
                <td><p>Jumping Jacks</p></td>
                <td><p>3</p></td>
                <td><p>5</p></td>
              </tr>
              <tr>
                <td><RadioBox radio/></td>
                <td><p>Lunges</p></td>
                <td><p>3</p></td>
                <td><p>5</p></td>
              </tr>
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}
export default BundleMatrix;
