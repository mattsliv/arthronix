import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import PatientView from './PatientView'

// class UserID extends Component {
//   render() {
//     return(
//       <div>
//         <h2>{this.props.match.params.patient.id}</h2>
//       </div>
//     )
//   }
// }

class PatientRow extends Component {
  render() {
    if (this.props.patient.messages === true) {
      var msg = "New message!"
    }

    return (
      <Router>
        <tr>
          {/*  FIX: need dynamic path */}
<<<<<<< HEAD
          <td><Link to="/patients/${:id}">{this.props.patient.name}</Link></td>
          <td>{this.props.patient.status}</td>
=======
          {/* <td><Link to="/patients/${:id}">{patient.name}</Link></td> */}
          <td>{patient.status}</td>
>>>>>>> 5bcf0a4a6c2410af599bcd20008f4c202749a086
          <td>{msg}</td>
          <td>{this.props.patient.type}</td>
          <td>{this.props.patient.appointment}</td>
        </tr>
        {/* <Switch>
          <Route path="/patients/:id" render={() => <UserID patient={patient}/>}/>
        </Switch> */}
      </Router>
    )
  }
}

class PatientTable extends Component {
  render() {
    // console.log(this.props.patients);

    const rows = []

    this.props.patients.forEach((patient) => {
      rows.push(
        <PatientRow key={patient.id} patient={patient}/>
      )
    })

    return (

      <div class="table-responsive">
        <table class="table" data-sort="table">
          <thead>
            <tr>
              <th><input type="checkbox" class="select-all" id="selectAll"/></th>
              <th>Name</th>
              <th>Status</th>
              <th>Messages</th>
              <th>Type</th>
              <th>Next Appointment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" class="select-row"/></td>
              <td><a href="#">#10001</a></td>
              <td>First Last</td>
              <td>Admin theme, marketing theme</td>
              <td>01/01/2015</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="select-row"/></td>
              <td><a href="#">#10004</a></td>
              <td>One More</td>
              <td>Marketing theme, personal blog theme, admin theme</td>
              <td>01/01/2015</td>
              <td>$300.00</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="select-row"/></td>
              <td><a href="#">#10019</a></td>
              <td>One More</td>
              <td>Marketing theme, personal blog theme, admin theme</td>
              <td>01/01/2015</td>
              <td>$300.00</td>
            </tr>
            <tr>
              <td><input type="checkbox" class="select-row"/></td>
              <td><a href="#">#10020</a></td>
              <td>Name Right Here</td>
              <td>Personal blog theme, admin theme</td>
              <td>01/02/2015</td>
              <td>$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      // <div class="panel panel-default">
      //   {/* <div class="panel-heading"></div> */}
      //   <table class="table">
      //     <thead>
      //       <tr>
      //         <th class="nav-item"><a class="nav-link active" href="" scope="col">Name</a></th>
      //         <th class="nav-item"><a class="nav-link active" href="" scope="col">Status</a></th>
      //         <th class="nav-item"><a class="nav-link active" href="" scope="col">Messages</a></th>
      //         <th class="nav-item"><a class="nav-link active" href="" scope="col">Type</a></th>
      //         <th class="nav-item"><a class="nav-link active" href="" scope="col">Next Appointment</a></th>
      //       </tr>
      //     </thead>
      //     <tbody>{rows}</tbody>
      //   </table>
      // </div>
    )
  }
}

export default PatientTable;
