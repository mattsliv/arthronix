import React , { Component } from 'react'

class BundleMatrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bundleID: props.bundleID,
      bundle: [],
      selected: [],
      edit: false
    }
    this.onLevelChange = this.onLevelChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onEdit   = this.onEdit.bind(this);
  }

  fetchBundle() { /* Is called when we are on edit or view bundle mode */
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
    if (this.state.bundleID == 0 ) { this.setState({edit: true}) }
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
          if(selected.exIds) {  /* Update selected exercises now */
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

  onRemove(e){ /* gets called when user selects remove on an exercise (removes it from their bundle)*/
    e.preventDefault();
    let bundle = this.state.bundle;
    let key = e.target.id;

    bundle[key-1].level = "-";
    bundle[key-1].reps = "-";
    bundle[key-1].sets = "-";
    this.setState({ bundle });
  }

  onCancel() { /* tells parent to close modal */
    const { closeModal } = this.props;
    closeModal();
  }

  onSubmit() { /* saves bundle then tells parent to close modal */
    this.onCancel();
  }

  onEdit(e) {
    e.preventDefault();
    this.setState({edit:true });
  }

  showGreyEx(ex){ /* takes an exercise, if it is included in the bundle show as black, else grey */
    if(ex.level == "-"){
      return(
      <tr bgcolor="#f7f7f7">
        <td>{this.levelBox(ex)}</td>
        <td><p style = {{color: 'grey'}}>{ex.exname}</p></td>
        <td><p>{ex.sets}</p></td>
        <td><p>{ex.reps}</p></td>
        <td><button class = "btn btn-primary" disabled> Remove </button></td>
      </tr>)
    }
    else{
      return(
        <tr>
          <td>{this.levelBox(ex)}</td>
          <td><p><b>{ex.exname}</b></p></td>
          <td><p>{ex.sets}</p></td>
          <td><p>{ex.reps}</p></td>
          <td>{this.removeBox(ex)}</td>
        </tr>
      )
    }
  }
  renderEdit(text, bundle){ /* render for edit or create new bundle view */
    let titles = ["Select", "Exercise", "Sets", "Reps"];
    return (
      <div>
        <text style={{color: 'black'}}> <font size = '10'>{text}</font></text>
          <div style={{color: 'black'}} class = "table-responsive">
            <table id="bundleTable" class="table" data-sort="table">
            <thead>
              <tr>
                {titles.map(title => <th>{title}</th>)}
              </tr>
            </thead>
            <tbody class="dash-table">
            {bundle.map(ex => this.showGreyEx(ex))}
              </tbody>
            </table>
            <button type="button" class="btn btn-primary" onClick = {this.onSubmit}> Submit </button>
            <button type="button" class="btn btn-primary" onClick = {this.onCancel}> Cancel </button>
          </div>
      </div>
    )
  }

  renderView(bundle){ /* render for bundle view */
    let titles = ["Exercise", "Sets", "Reps"];
    return (
      <div>
        <text style={{color: 'black'}}> <font size = '10'>Bundle {this.state.bundleID}</font></text>
          <div style={{color: 'black'}} class = "table-responsive">
            <table id="bundleTable" class="table" data-sort="table">
            <thead>
              <tr>
                {titles.map(title => <th>{title}</th>)}
              </tr>
            </thead>
            <tbody class="dash-table">
            {bundle.map(ex => { if(ex.level!='-') {
                return(
                  <tr>
                    <td><p><b>{ex.exname}</b></p></td>
                    <td><p>{ex.sets}</p></td>
                    <td><p>{ex.reps}</p></td>
                  </tr>
                )}
             })}
              </tbody>
            </table>
            <button type="button" class="btn btn-primary" onClick = {this.onEdit}> Edit </button>
            <button type="button" class="btn btn-primary" onClick = {this.onCancel}> Close </button>
          </div>
      </div>
    )
  }

  render() {
    let bundle = this.state.bundle.slice(); //create a bundle copy so I can rearrange it
    bundle.sort(function(a,b){              //sort by which exercises are selected or not
       if(a.level == b.level) return 0;
       if(a.level == "-") return 1;
       else return -1;
    });
    let text = '';
    if(this.state.edit) {
      if(this.state.selected.exIds) {text = "Edit Bundle " + this.state.bundleID;}
      else {text = "Create Bundle"};
      return ( this.renderEdit(text, bundle));
    }
    else {
      return ( this.renderView(bundle));
    }
  }
}
export default BundleMatrix;
