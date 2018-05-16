import React , { Component } from 'react'

class BundleMatrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bundleID: props.bundleID, //will either be sent the id of the bundle, or 0 to create one.
      exercises: [],
      edit: false, //do we want to just display the exercises or allow for editing?
      bundleKeys: props.bundleKeys
    }
    this.onLevelChange = this.onLevelChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onEdit   = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() { /* fetch exercises and initialize the level theyre set to*/
    if (this.state.bundleID == 0 ) { this.setState({edit: true}) } /* Because we are on create bundle view*/
    fetch('/exercises')
      .then(res => res.json())
      .then(exercises => { /* fetch all exercises in DB and initialize with defauts*/
        let e   = exercises.map(ex => {
          var rEx = {
            key: ex.id,
            exname: ex.exname,
            level: "-",
            reps: "-",
            sets: "-",
          };
          return rEx;
          })
          if(this.state.bundleID > 0) { /* there's a bundle to fetch */
          fetch('/bundles')   /* fetch the specified bundle and update exercises as accordingly*/
            .then(res => res.json())
            .then(bundles => {
              let currBundle = bundles.filter(b => { if(b.id == this.state.bundleID) return b})
              let b = currBundle[0];
              var selected = { //the selected exercises in this bundle
                exIds: [b.ex1, b.ex2, b.ex3, b.ex4, b.ex5, b.ex6, b.ex7, b.ex8, b.ex9, b.ex10],
                reps : [b.reps1, b.reps2, b.reps3, b.reps4, b.reps5, b.reps6, b.reps7, b.reps8, b.reps9, b.reps10],
                sets : [b.sets1, b.sets2, b.sets3, b.sets4, b.sets5, b.sets6, b.sets7, b.sets8, b.sets9, b.sets10],
              }
              for (var i = 0; i < selected.exIds.length; i++) {
                if(selected.exIds[i] == null) break; //this entry is blank
                e[selected.exIds[i]-1].reps = selected.reps[i];
                e[selected.exIds[i]-1].sets = selected.sets[i];
                e[selected.exIds[i]-1].level = this.computeLevel(selected.reps[i], selected.sets[i]);
              }
              exercises = e.filter(entry => entry); //remove null entries
              this.setState({exercises});
            })
          }
          else {
            exercises = e.filter(entry => entry); //remove null entries
            this.setState({exercises}); //exercises is updated to include the selected exercises data
          }
      })
  }

  computeLevel(reps, sets){
    if (reps == '-') { return '-'}
    else if (sets == '1-2' && reps == '6-8'){ return 'low'}
    else if (sets == '2-3' && reps == '8-10'){ return 'med'}
    else if (sets == '3-4' && reps == '10-12'){ return 'high'}
    else { return 'custom'}
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
    let exercises = this.state.exercises;
    let level = changeEvent.target.value;
    let key = changeEvent.target.id;

    exercises[key-1].level = level;
    if(level == "high"){
      exercises[key-1].reps = "10-12";
      exercises[key-1].sets = "3-4";
    }
    else if (level == "med"){
      exercises[key-1].reps = "8-10";
      exercises[key-1].sets = "2-3";
    }
    else {
      exercises[key-1].reps = "6-8";
      exercises[key-1].sets = "1-2";
    }
    this.setState({ exercises });
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
    let exercises = this.state.exercises;
    let key = e.target.id;

    exercises[key-1].level = "-";
    exercises[key-1].reps = "-";
    exercises[key-1].sets = "-";
    this.setState({ exercises });
  }

  onCancel() { /* tells parent to close modal */
    const { closeModal } = this.props;
    closeModal();
  }

  onSubmit() { /* saves bundle then tells parent to close modal */
    const { updateBundle } = this.props; //parent's update function
    let data = {
      exercises: this.state.exercises,
      id: this.state.bundleID
    };
    if(this.state.bundleID < 1) { // create new bundle request type
      var request = new Request('/addBundle', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
      });
    }
    else {                        //edit bundle request type
      var request = new Request('/editBundle', {
        method: 'PUT',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
      });
    }
    fetch(request)              //execute request
      .then((response) =>  response.json())
      .then(data => {          //if new bundle, append the new key to bundleKeys
        if(this.state.bundleID < 1){
          let bundleKeys = this.state.bundleKeys;
          bundleKeys.push(data.id);
          this.setState({bundleKeys});
          updateBundle(bundleKeys);  //and inform parent of the change.
        }
      })
      .catch((error) => {
        console.error(error);
      });
    this.onCancel(); //close
  }

  onEdit(e) { /* When edit is clicked, switches state to edit mode (which will render the edit view) */
    e.preventDefault();
    this.setState({edit:true });
  }

  onDelete(e) { /* When clicked, will delete the particular bundle. */
    e.preventDefault();
    let bundleKeys = this.state.bundleKeys;
    //make the request
    let data = {id: this.state.bundleID}
    var request = new Request('/deleteBundle', {
      method: 'DELETE',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(data)
    })
    fetch(request)
      .catch((error) => {console.error(error);})
    //update locally and inform the parent
    const { updateBundle } = this.props; //parent's update function
    let bindex = -1;
    for(var i=0; i<bundleKeys.length; i++){
      if(bundleKeys[i] == this.state.bundleID){ bindex = i;}
    }
    if(bindex > -1) { bundleKeys.splice(bindex,1); } //remove the key
    this.setState({bundleKeys});
    updateBundle(bundleKeys);
    this.onCancel();                     //close Modal
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
            <thead> <tr> {titles.map(title => <th>{title}</th>)} </tr> </thead>
            <tbody class="dash-table">
                {bundle.map(ex => this.showGreyEx(ex))}
              </tbody>
            </table>
            <button type="button" class="btn btn-primary" onClick = {this.onDelete} style = {{position: 'fixed', top: '50px', right: '60px'}}> Delete </button>
            <button type="button" class="btn btn-primary" onClick = {this.onSubmit} style = {{position: 'fixed', bottom: '50px', right: '120px'}} > Submit </button>
            <button type="button" class="btn btn-primary" onClick = {this.onCancel} style = {{position: 'fixed', bottom: '50px', right: '60px'}} > Cancel </button>
          </div>
      </div>
    )
  }

  renderView(bundle){ /* render for bundle view */
    let titles = ["Exercise", "Sets", "Reps"];
    return (
      <div>
        <text style={{color: 'black'}}> <font size = '10'>Week {this.state.bundleID}</font></text>
          <div style={{color: 'black'}} class = "table-responsive">
            <table id="bundleTable" class="table" data-sort="table">
            <thead> <tr> {titles.map(title => <th>{title}</th>)} </tr> </thead>
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
            <button type="button" class="btn btn-primary" onClick = {this.onDelete} style = {{position: 'fixed', top: '50px', right: '60px'}}> Delete </button>
            <button type="button" class="btn btn-primary" onClick = {this.onEdit} style = {{position: 'fixed', bottom: '50px', right: '120px'}}> Edit </button>
            <button type="button" class="btn btn-primary" onClick = {this.onCancel} style = {{position: 'fixed', bottom: '50px', right: '60px'}}> Close </button>
          </div>
      </div>
    )
  }

  render() {
    let exercises = this.state.exercises.slice(); //create a bundle copy so I can rearrange it
    exercises.sort(function(a,b){              //sort by which exercises are selected or not
       if(a.level == b.level) return 0;
       if(a.level == "-") return 1;
       else return -1;
    });
    let text = '';
    if(this.state.edit) {                   //user wants to edit bundle so show edit view
      if(this.state.bundleID > 0) {text = "Edit Week " + this.state.bundleID;}
      else {text = "Create Bundle"};
      return ( this.renderEdit(text, exercises));
    }
    else {                                 //user is just viewing bundle :)
      return ( this.renderView(exercises));
    }
  }
}
export default BundleMatrix;
