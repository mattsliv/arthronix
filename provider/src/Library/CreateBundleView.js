import React , { Component } from 'react'

class SelectLevelBox extends Component {

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

class SubmitBox extends Component {
/*On click, creates new bundle entry in DB with data selected*/

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
    let titles = ["Select", "Exercise", "Sets", "Reps"];
    let rows   = this.state.exercises.map(e => e.exname);
    rows       = rows.filter(word => word); //remove null entries
    return (
      <div>
        <h1>Create Bundle</h1>
          <div class = "table-responsive">
            <table id="bundleTable" class="table" data-sort="table">
            <thead>
              <tr>
                {titles.map(title => <th>{title}</th>)}
              </tr>
            </thead>
            <tbody class="dash-table">
            {rows.map(row =>
              <tr>
                <td><SelectLevelBox levelbox/></td>
                <td><p>{row}</p></td>
                <td><p>3</p></td>
                <td><p>5</p></td>
              </tr>
            )}
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}
export default BundleMatrix;
