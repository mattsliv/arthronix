import React , { Component } from 'react'

class BundleMatrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bundleID: props.bundleID,
      bundle: []
    }
    this.onLevelChange = this.onLevelChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  componentWillMount() { /* fetch exercises and initialize their level */
    let exercises = [];  /* init incase no exercises fetched. Should also do a check after fetch */
    fetch('/exercises')
      .then(res => res.json())
      .then(exercises => {
        console.log(this.state.bundleID);
        let bundle   = exercises.map(ex => {
          if((ex.id == 2 || ex.id == 6) && (this.state.bundleID == 1)){ //from here
            var rEx = {
              key: ex.id,
              exname: ex.exname,
              level: "low",
              reps: "6-8",
              sets: "1-2",
            };
            return rEx;
          }                          /// to here will be replaced by loading exercises already in bundle
          else {
            var rEx = {
              key: ex.id,
              exname: ex.exname,
              level: "-",
              reps: "-",
              sets: "-",
            };
            return rEx;
          }
          })
        bundle = bundle.filter(entry => entry); //remove null entries
        this.setState({bundle});
  })};

  levelBox(exercise) { /* returns jsx for level selection box */
    return (
    <div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" id={exercise.key} value="low" checked={exercise.level === "low"} onChange={this.onLevelChange} />
        <label class="form-check-label">L </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" id={exercise.key} value="med" checked={exercise.level === "med"} onChange={this.onLevelChange} />
        <label class="form-check-label">M </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" id={exercise.key} value="high" checked={exercise.level === "high"} onChange={this.onLevelChange} />
        <label class="form-check-label">H </label>
      </div>
    </div>
  )
  }

  onLevelChange(changeEvent){ /* gets called when user selects level on level box*/
    let bundle = this.state.bundle;
    let level = changeEvent.target.value;
    let key = changeEvent.target.id;

    bundle[key-1].level = level;
    if(level == "high"){
      bundle[key-1].reps = "10-12";
      bundle[key-1].sets = "3-4";
    }
    else if (level == "med"){
      bundle[key-1].reps = "8-10";
      bundle[key-1].sets = "2-3";
    }
    else {
      bundle[key-1].reps = "6-8";
      bundle[key-1].sets = "1-2";
    }
    this.setState({ bundle });
  }

  removeBox(exercise){ /* returns jsx for remove exercise from bundle button */
    return (
      <div>
        <button class="btn btn-primary" id={exercise.key} onClick={this.onRemove}>
          Remove
        </button>
      </div>
    )
  }

  onRemove(e){ /* gets called when user selects remove on an exercise */
    e.preventDefault();
    let bundle = this.state.bundle;
    let key = e.target.id;

    bundle[key-1].level = "-";
    bundle[key-1].reps = "-";
    bundle[key-1].sets = "-";
    this.setState({ bundle });
  }

  showGreyEx(ex){ /* takes an exercise, if it is included in the bundle show as black, else grey */
    if(ex.level == "-"){
      return(<p style = {{color: 'grey'}}>{ex.exname}</p>)
    }
    else{
      return(<p style = {{color: 'black'}}><b>{ex.exname}</b></p>)
    }
  }
  render() {
    let titles = ["Select", "Exercise", "Sets", "Reps"];
    let bundle = this.state.bundle.slice(); //create a bundle copy so I can rearrange it
    bundle.sort(function(a,b){              //sort by which exercises are selected or not
       if(a.level == b.level) return 0;
       if(a.level == "-") return 1;
       else return -1;
    });
    return (
      <div>
        <text style={{color: 'black'}}> <font size = '10'>Create Bundle</font></text>
          <div style={{color: 'black'}} class = "table-responsive">
            <table id="bundleTable" class="table" data-sort="table">
            <thead>
              <tr>
                {titles.map(title => <th>{title}</th>)}
              </tr>
            </thead>
            <tbody class="dash-table">
            {bundle.map(ex =>
              <tr>
                <td>{this.levelBox(ex)}</td>
                <td>{this.showGreyEx(ex)}</td>
                <td><p>{ex.sets}</p></td>
                <td><p>{ex.reps}</p></td>
                <td>{this.removeBox(ex)}</td>
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
