import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Modal from 'react-modal'
import pdf from '../images/pdf.png';
import CreateBundle from './CreateBundleView'
import EditBundle from './EditBundle'

class SupportRow extends Component {
  render() {
    return (
      <div>
        <table>
          <tr padding="20px">
            <td><h3>Educational Support</h3></td>
            <td>
              <button type="button" class="btn btn-primary" >
               + Add New
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-primary" >
                Expand All
              </button>
            </td>
          </tr>

          <a href="PDFs/paper.pdf"><img class="pdf-image" src={pdf} alt="pdf"/></a>
          <a href="PDFs/paper.pdf"><img class="pdf-image" src={pdf} alt="pdf"/></a>
          <a href="PDFs/paper.pdf"><img class="pdf-image" src={pdf} alt="pdf"/></a>
          <a href="PDFs/paper.pdf"><img class="pdf-image" src={pdf} alt="pdf"/></a>
          <a href="PDFs/paper.pdf"><img class="pdf-image" src={pdf} alt="pdf"/></a>

        </table>
      </div>
    )
  }
}

class VideoRow extends Component {

  render() {
    return (
      <div>
        <table class="bundle-week-video">
          <tr padding="20px">
            <td><h3>Videos</h3></td>
            <td>
              <button type="button" class="btn btn-primary" >
                + Add New
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-primary" >
                Expand All
              </button>
            </td>
          </tr>
          <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" width="230" height="130" frameborder="0" allowfullscreen></iframe>
          <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" width="230" height="130" frameborder="0" allowfullscreen></iframe>
          <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" width="230" height="130" frameborder="0" allowfullscreen></iframe>
          <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" width="230" height="130" frameborder="0" allowfullscreen></iframe>
          <iframe src="http://www.youtube.com/embed/W7qWa52k-nE" width="230" height="130" frameborder="0" allowfullscreen></iframe>
        </table>
      </div>
    )
  }
}

class BundleRow extends Component {
  constructor (props) {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  getModal () {
    return (
    <Modal isOpen = {this.state.showModal}>
         <CreateBundle/>
         <button type="button" class="btn btn-primary"> Sumbit </button>
         <button type="button" class="btn btn-primary" onClick = {this.handleCloseModal}> Cancel </button>
    </Modal> )
  }

  render() {
    return (
      <Router>
      <div>
        <table class="bundle-week-button">
          <tr padding="20px">
            <td><h3>Bundles</h3></td>
            <td>
              <div>
                 <button type="button" class="btn btn-primary" onClick = {this.handleOpenModal}> +Add New </button>
                 {this.getModal()}
              </div>
            </td>
            <td>
            <button type="button" class="btn btn-primary" >
                Expand All
            </button>
            </td>
          </tr>

          <button type="button" class="btn btn-sm btn-pill btn-info" onClick = {this.handleOpenModal}> Week 1 </button>
          {this.getModal()}
        </table>
        <Switch>
          <Route path="/createBundle" component={CreateBundle}/>
          <Route path="/editBundle" component={EditBundle}/>
        </Switch>
      </div>
      </Router>
    )
  }
}



class LibraryTable extends Component {
  render() {
    return (
      <Router>
        <div>
          <BundleRow />
          <VideoRow />
          <SupportRow />
        </div>
      </Router>


    )
  }
}

export default LibraryTable;
