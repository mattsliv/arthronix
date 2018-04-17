import React , { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Modal from 'react-modal'
import pdf from '../images/pdf.png';
import pdfFile from './PDFs/leg.pdf'
import CreateBundle from './CreateBundleView'
import {Document,Page} from 'react-pdf'

class PdfView extends Component {
constructor (props){
    super();
    this.state = {
      numPages: 2,
      pageNumber: 1,
    };

    this.onDocumentLoad = this.onDocumentLoad.bind(this);

}

  onDocumentLoad = ({numPages}) => {
    this.setState({ numPages });
  }
  onPageChange= ({pageNumber}) => {
    this.setState({pageNumber: 2});
  }



  render() {
    const {pageNumber, numPages} = this.state;

    return (
      <div align = 'center'>
        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
        <Document file = {pdfFile} onLoadSucess={this.onDocumentLoad}>
            <Page pageNumber = {pageNumber} />
        </Document>
        <button type = 'button' onClick = {this.onPageChange}>NEXT</button>
      </div>
    )
  }
}

class SupportRow extends Component { /* display educational support matieral*/

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
           <text style={{color: 'black'}}> <font size = '5'> Viewing PDF </font></text>
           <PdfView />
           <div align = 'right'>
            <button type="button" class="btn btn-primary" onClick = {this.handleCloseModal}> Close </button>
          </div>
      </Modal> )
    }

    render() {
      return (
        <div>
          <table>
            <tr padding="20px">
              <td><h3>Educational Support</h3></td>
              <td>
                <button type="button" class="btn btn-primary" onClick = {this.handleOpenModal} >
                 + Add New
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-primary" >
                  Expand All
                </button>
              </td>
            </tr>
            {this.getModal()}
            <img src = {pdf} class = 'pdf-image' onClick = {this.handleOpenModal} />
            <img src = {pdf} class = 'pdf-image' onClick = {this.handleOpenModal} />
            <img src = {pdf} class = 'pdf-image' onClick = {this.handleOpenModal} />
            <img src = {pdf} class = 'pdf-image' onClick = {this.handleOpenModal} />
            <img src = {pdf} class = 'pdf-image' onClick = {this.handleOpenModal} />

          </table>
        </div>
      )
    }
}

class VideoRow extends Component { /* display exercise video content */

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

class BundleRow extends Component { /* Displays bundle and on click can edit/create */
  constructor (props) {
    super();
    this.state = {
      showModal: -1 /* modal starts closed */
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (openEvent) { /* open the modal according to which bundle was clicked */
    this.setState({ showModal: openEvent.target.value });
  }

  handleCloseModal () {
    this.setState({ showModal: -1 });
  }

  getModal () { /* jsx to display modal */
    return (
    <Modal isOpen = {this.state.showModal >= 0}>
         <CreateBundle bundleID={this.state.showModal} closeModal = {this.handleCloseModal}/> {/* send which bundle it was clicked from */}
    </Modal> )
  }

  render() {
    return (
      <div>
        <table class="bundle-week-button">
          <tr padding="20px">
            <td><h3>Bundles</h3></td>
            <td>
              <div>
                 <button type="button" value='0' class="btn btn-primary" onClick = {this.handleOpenModal}> +Add New </button>
                 {this.getModal()} {/* The modal used throughout; only need one */}
              </div>
            </td>
            <td>
              <button type="button" class="btn btn-primary" >
                  Expand All
              </button>
            </td>
          </tr>
          <button type="button" value='1' class="btn btn-sm btn-pill btn-info" onClick = {this.handleOpenModal}> Week 1 </button>
          <button type="button" value='2' class="btn btn-sm btn-pill btn-info" onClick = {this.handleOpenModal}> Week 2 </button>
          <button type="button" value='3' class="btn btn-sm btn-pill btn-info" onClick = {this.handleOpenModal}> Week 3 </button>
          <button type="button" value='4' class="btn btn-sm btn-pill btn-info" onClick = {this.handleOpenModal}> Week 4 </button>
          <button type="button" value='5' class="btn btn-sm btn-pill btn-info" onClick = {this.handleOpenModal}> Week 5 </button>
        </table>
      </div>
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
