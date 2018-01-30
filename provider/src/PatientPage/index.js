import React, { Component } from 'react'
import PatientView from './PatientView'

export default class extends Component {
  render(){
    return (
    <PatientView patients={this.props.patients}/>
    )
  }
}
