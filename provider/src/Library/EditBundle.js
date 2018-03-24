import React , { Component } from 'react'

class SelectLevelBox extends Component {

  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
      this.state = {
        selectedOption: props.level
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
        <input class="form-check-input" type="radio" value="low" checked={this.state.selectedOption === 'low'} onChange={this.handleOptionChange} />
        <label class="form-check-label">L </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" value="med" checked={this.state.selectedOption === 'med'} onChange={this.handleOptionChange} />
        <label class="form-check-label">M </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" value="high" checked={this.state.selectedOption === 'high'} onChange={this.handleOptionChange} />
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
    let rows   = this.state.exercises.map(ex => {
      if(ex.id == 2 || ex.id == 6) { //from here
        var rEx = {
          key: ex.id,
          exname: ex.exname,
          level: "low",
          reps: "6-8",
          sets: "2-3"
        };
        return rEx;
      }                          /// to here will be replaced by loading exercises already in bundle
      else {
        var rEx = {
          key: ex.id,
          exname: ex.exname,
          level: "-",
          reps: "-",
          sets: "-"
        };
        return rEx;
      }
      })
    rows = rows.filter(word => word); //remove null entries
    rows.sort(function(a,b){                //sort by which exercises are selected or not
      if(a.level == b.level) return 0;
      if(a.level == "-") return 1;
      else return -1;
    });

    return (
      <div>
        <h1>Edit Bundle</h1>
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
                <td><SelectLevelBox level={row.level}/></td>
                <td><p>{row.exname}</p></td>
                <td><p>{row.sets}</p></td>
                <td><p>{row.reps}</p></td>
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
