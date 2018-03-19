import React , { Component } from 'react'


var JSONPretty = require('react-json-pretty');
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
    <div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
        <label class="form-check-label">L </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} />
        <label class="form-check-label">M </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange} />
        <label class="form-check-label">H </label>
      </div>
    </div>
   )
  }
}

class BundleMatrix extends Component {

  constructor(props) {
    super(props)
    this.state = {exercises: []}
  }
  componentWillMount() {
    fetch('/exercises')
      .then(res => res.json())
      .then(exercises => this.setState({ exercises }));
  }

  render() {
    return (
      <div>
        <h1>Create Bundle</h1>
          <div class = "table-responsive">
            <table id="bundleTable" class="table" data-sort="table">
            <thead>
              <tr>
                <th>Select</th>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody class="dash-table">
              <tr>
                <td><RadioBox radio/></td>
                <td><p></p></td>
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
        { <JSONPretty id="json-pretty" json={this.state.exercises}></JSONPretty>}
      </div>
    )
  }
}
export default BundleMatrix;
