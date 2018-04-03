import React , { Component } from 'react'

class BundleMatrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bundleID: props.bundleID,
      bundle: [],
      selected: []
    }
    this.onLevelChange = this.onLevelChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  fetchBundle() { /* Is called when we are on edit bundle mode */
    fetch('/bundles')
      .then(res => res.json())
      .then(bundles => {
        let currBundle = bundles.filter(b => { /* get the bundle we actually care about */
          if(b.id == this.state.bundleID) return b
        })
        let b = currBundle[0];
        var selected = {
          exIds: [b.ex1, b.ex2, b.ex3, b.ex4, b.ex5, b.ex6, b.ex7, b.ex8, b.ex9, b.ex10],
          reps : [b.reps1, b.reps2, b.reps3, b.reps4, b.reps5, b.reps6, b.reps7, b.reps8, b.reps9, b.reps10],
          sets : [b.sets1, b.sets2, b.sets3, b.sets4, b.sets5, b.sets6, b.sets7, b.sets8, b.sets9, b.sets10],
          levs : [b.lev1, b.lev2, b.lev3, b.lev4, b.lev5, b.lev6, b.lev7, b.lev8, b.lev9, b.lev10]
        }
        this.setState({selected});
  })
  }

  componentWillMount() { /* fetch exercises and initialize the level theyre set to*/
    if (this.state.bundleID > 0) { this.fetchBundle();/* We recieved a bundle to load */}
    fetch('/exercises')
      .then(res => res.json())
      .then(exercises => { /* fetch and initialize all exercises in DB */
        let bundle   = exercises.map(ex => {
          var rEx = {
            key: ex.id,
            exname: ex.exname,
            level: "-",
            reps: "-",
            sets: "-",
          };
          return rEx;
          })
          let selected = this.state.selected;
          if(selected.exIds) {
            for (var i = 0; i < selected.exIds.length; i++) {
              if(selected.exIds[i] == null) break;
              bundle[selected.exIds[i]].reps = selected.reps[i];
              bundle[selected.exIds[i]].sets = selected.sets[i];
              bundle[selected.exIds[i]].level = selected.levs[i];
            }
          }
        bundle = bundle.filter(entry => entry); //remove null entries
        this.setState({bundle});
      })
  }

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
                <td><p>{ex.exname}</p></td>
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
