import React , { Component } from 'react'

class SelectLevelBox extends Component {

  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
      this.state = {
        key: props.row,
        selectedOption: props.level
      }
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    const {key} = this.state;
    const {onSelect} = this.props;
    onSelect(key, changeEvent.target.value);
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



class BundleMatrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bundleID: props.bundleID,
      bundle: []
    }
    this.onLevelSelect = this.onLevelSelect.bind(this);
  }

  componentWillMount() {
    fetch('/exercises')
      .then(res => res.json())
      .then(exercises => {
        let bundle   = exercises.map(ex => {
          if(ex.id == 2 || ex.id == 6) { //from here
            var rEx = {
              key: ex.id,
              exname: ex.exname,
              level: "low",
              reps: "6-8",
              sets: "1-2"
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
        bundle = bundle.filter(entry => entry); //remove null entries
        this.setState({bundle});
  })};

  onLevelSelect(key, level) {
    let bundle = this.state.bundle;
    bundle[key-1].level = level; // key-1 since I started id's in DB at 1
    if(level == 'high'){
      bundle[key-1].reps = "10-12";
      bundle[key-1].sets = "3-4";
    }
    else if (level == 'med'){
      bundle[key-1].reps = "8-10";
      bundle[key-1].sets = "2-3";
    }
    else {
      bundle[key-1].reps = "6-8";
      bundle[key-1].sets = "1-2";
    }
    this.setState({ bundle });
    console.log(bundle);
  }

  render() {
    let titles = ["Select", "Exercise", "Sets", "Reps"];
    let bundle = this.state.bundle.slice(); //create a copy so I can rearrange it
    bundle.sort(function(a,b){          //sort by which exercises are selected or not
       if(a.level == b.level) return 0;
       if(a.level == "-") return 1;
       else return -1;
    });
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
            {bundle.map(ex =>
              <tr>
                <td><SelectLevelBox level={ex.level} row={ex.key} onSelect= {this.onLevelSelect}/></td>
                <td><p>{ex.exname}</p></td>
                <td><p>{ex.sets}</p></td>
                <td><p>{ex.reps}</p></td>
              </tr>
            )}
              </tbody>
            </table>
          </div>
          <p align = "right"><button type="button" class="btn btn-primary" > Cancel </button>
             <button type="button" class="btn btn-primary" > Submit </button> {/*On click, creates new bundle entry in DB with data selected*/}
          </p>
      </div>
    )
  }
}
export default BundleMatrix;
