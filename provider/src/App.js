/* Modules */
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

/* Components */
import PatientDash from "./PatientDash/";
import Library from "./Library/";
import PatientView from "./PatientDash/PatientView";

/* Styles */
import logo from "images/logo.png";
import "styles/docs/assets/css/toolkit-inverse.css";
import "styles/docs/assets/css/application.css";
import "styles/docs/assets/css/docs.css";
import "styles/docs/assets/css/styles.css";

/* Overview: overview of landing page of app */
class Overview extends Component {
  render() {
    return (
      <div>
        <div class="container home-content">
          <div class="row">
            <div class="col-md-7 col-centered">
              <h1>Arthronix</h1>
              <div class="hr-divider">
                <h3 class="hr-divider-content hr-divider-heading"/>
              </div>
              <p>
                Arthronix is a new web and mobile application available for
                physical therapy patients and providers, respectively.
                It is intended to support patients with their treatment plans
                through better connection and information exchange with their
                healthcare teams. It serves as a hub for resources that address
                patient concerns pre and post surgery in a concise manner. This
                enables patients to learn more about their procedure which helps
                them gain confidence in recovery.
              </p>
            </div>

            <div class="col-md-4">
              <img class="screen" src={logo} alt="logo"/>
            </div>
          </div>
        </div>
      </div>);
  }
}

/* App: root component of project */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  /* fetches users from the database and saves them to the apps state */
  componentWillMount() {
    fetch("/users").then(res => res.json()).then(users => this.setState({users}));
  }

  render() {
    return (
      <Router>
        <div>

          {/* App navbar */}
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand">
                  <Link to="/" activeClassName="active">
                    Arthronix
                  </Link>
                </a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">

                  <li>
                    {/* Patients tab */}
                    <Link to="/patients" activeClassName="active">
                      <a href="#" class="btn btn-outline-primary px-3">
                        <span class="icon icon-users"/>
                        Patients
                      </a>
                    </Link>
                  </li>

                  {/*  Library tab */}
                  <li>
                    <Link to="/library" activeClassName="active">
                      <a href="#" class="btn btn-outline-primary px-3">
                        <span class="icon icon-video"/>
                        Library
                      </a>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
          <hr/>

          {/* Switches and routes for child components */}
          <Switch>
            <Route exact="exact" path="/" render={() => <Overview/>}/>
            <Route path="/patients" render={() => <PatientDash patients={this.state.users}/>}/>

            {/* BUG START */}
            <Route path="/patient/1" render={() => (<PatientView name={"Elaine Tsun"} patient={this.state.users}/>)}/>
            <Route path="/patient/2" render={() => (<PatientView name={"Chris Stumper"} patient={this.state.users}/>)}/>
            <Route path="/patient/3" render={() => (<PatientView name={"Shemona Sing"} patient={this.state.users}/>)}/>
            <Route path="/patient/4" render={() => (<PatientView name={"Savanna Smith"} patient={this.state.users}/>)}/>
            <Route path="/patient/5" render={() => (<PatientView name={"Matt Slivinski"} patient={this.state.users}/>)}/>
            <Route path="/patient/6" render={() => (<PatientView name={"John Johnson"} patient={this.state.users}/>)}/>
            <Route path="/patient/7" render={() => (<PatientView name={"Robert Mac"} patient={this.state.users}/>)}/>
            <Route path="/patient/8" render={() => (<PatientView name={"Elon Musk"} patient={this.state.users}/>)}/>
            <Route path="/patient/9" render={() => (<PatientView name={"Sam White"} patient={this.state.users}/>)}/>
            <Route path="/patient/10" render={() => (<PatientView name={"Kathy Cat"} patient={this.state.users}/>)}/>
            <Route path="/patient/11" render={() => (<PatientView name={"Michelle Read"} patient={this.state.users}/>)}/>
            <Route path="/patient/12" render={() => (<PatientView name={"Steve Williams"} patient={this.state.users}/>)}/>
            <Route path="/patient/13" render={() => (<PatientView name={"Harry Ron"} patient={this.state.users}/>)}/>
            <Route path="/patient/14" render={() => (<PatientView name={"Samantha Vally"} patient={this.state.users}/>)}/>
            <Route path="/patient/15" render={() => (<PatientView name={"Tak Yun"} patient={this.state.users}/>)}/>
            <Route path="/patient/16" render={() => (<PatientView name={"Joe Trolly"} patient={this.state.users}/>)}/>
            <Route path="/patient/17" render={() => (<PatientView name={"Nick Cohen"} patient={this.state.users}/>)}/>
            <Route path="/patient/18" render={() => (<PatientView name={"Mary Stratton"} patient={this.state.users}/>)}/>
            <Route path="/patient/19" render={() => (<PatientView name={"Bryant Lai"} patient={this.state.users}/>)}/>
            <Route path="/patient/20" render={() => (<PatientView name={"Matthew Wu"} patient={this.state.users}/>)}/>
            <Route path="/patient/21" render={() => (<PatientView name={"Sammi Ford"} patient={this.state.users}/>)}/>
            <Route path="/patient/22" render={() => (<PatientView name={"Jessica Swan"} patient={this.state.users}/>)}/>
            <Route path="/patient/23" render={() => (<PatientView name={"Song Han"} patient={this.state.users}/>)}/>
            <Route path="/patient/24" render={() => (<PatientView name={"Sarah LeBlanc"} patient={this.state.users}/>)}/>
            <Route path="/patient/25" render={() => (<PatientView name={"Jesse Rogers"} patient={this.state.users}/>)}/>
            {/* BUG END */}

            <Route path="/library" component={Library}/>
          </Switch>
        </div>
      </Router>);
  }
}

export default App;
