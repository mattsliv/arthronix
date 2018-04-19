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
import Video from './VideoModal'
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
            <button type="button" class="btn btn-primary" onClick = {this.handleCloseModal} style = {{position: 'fixed', bottom: '50px', right: '50px'}}> Close </button>
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
  constructor (props) {
     super();
     this.state = {
      showModal: false,
      videoValue : null
     };
     this.handleOpenModal = this.handleOpenModal.bind(this);
     this.handleCloseModal = this.handleCloseModal.bind(this);
   }
   handleOpenModal (openEvent) {
     this.setState({ showModal: true, videoValue: openEvent.target.id});
   }
   handleCloseModal () {
     this.setState({ showModal: false });
   }
  getModal () {
     return (
     <Modal isOpen = {this.state.showModal}>
          <Video videoID = {this.state.videoValue} />
          <div align = 'right'>
           <button type="button" class="btn btn-primary" onClick = {this.handleCloseModal} style = {{position: 'fixed', bottom: '50px', right: '50px'}}> Close </button>
         </div>
     </Modal> )
   }
  render() {
    return (
      <div>
        <table class="bundle-week-video">
          <tr padding="20px">
            <td><h3>Videos</h3></td>
            <td>
              <button type="button" class="btn btn-primary" onClick = {this.handleOpenModal}>
                + Add New
              </button>
              {this.getModal()}
            </td>
            <td>
              <button type="button" class="btn btn-primary" >
                Expand All
              </button>
            </td>
          </tr>

         <img src = "https://img.youtube.com/vi/o5b0gS7wI1k/0.jpg" class = 'video-thumbnail' onClick = {this.handleOpenModal} id = 'https://www.youtube.com/embed/o5b0gS7wI1k' />
         <img src = "https://img.youtube.com/vi/A7OTduW8QqI/0.jpg" class = 'video-thumbnail' onClick = {this.handleOpenModal} id = 'https://www.youtube.com/embed/A7OTduW8QqI'/>
         <img src = "https://img.youtube.com/vi/9Vs7-M-pkNA/0.jpg" class = 'video-thumbnail' onClick = {this.handleOpenModal} id= 'https://www.youtube.com/embed/9Vs7-M-pkNA'/>
         <img src = "https://img.youtube.com/vi/3OiJqAtPQUc/0.jpg" class = 'video-thumbnail' onClick = {this.handleOpenModal} id = 'https://www.youtube.com/embed/3OiJqAtPQUc'/>
         <img src = "https://img.youtube.com/vi/1uwAyZ2RyLQ/0.jpg" class = 'video-thumbnail' onClick = {this.handleOpenModal} id = 'https://www.youtube.com/embed/1uwAyZ2RyLQ'/>

        </table>
      </div>
    )
  }
}

class BundleRow extends Component { /* Displays bundle and on click can edit/create */
  constructor (props) {
    super();
    this.state = {
      showModal: -1, /* modal starts closed */
      bundleKeys: []
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleUpdateBundle = this.handleUpdateBundle.bind(this);
  }

  componentWillMount () { /* Get the bundle keys */
    fetch('/bundleKeys')
      .then(res => res.json())
      .then(bundleKeys => {
        let bk = bundleKeys.map(key => parseInt(key.id));
        function sortNumber(a,b) {return a - b;}
        bk.sort(sortNumber);
        this.setState({bundleKeys: bk});
      })
  }

  handleOpenModal (openEvent) { /* open the modal according to which bundle was clicked */
    this.setState({ showModal: openEvent.target.value });
  }

  handleCloseModal () {
    this.setState({ showModal: -1 });
  }

  handleUpdateBundle (bundleKeys) {
    this.setState({bundleKeys});
  }

  getModal () { /* jsx to display modal */
    return (
    <Modal isOpen = {this.state.showModal >= 0}>
         <CreateBundle bundleID={this.state.showModal} bundleKeys={this.state.bundleKeys} updateBundle = {this.handleUpdateBundle} closeModal = {this.handleCloseModal}/> {/* send which bundle it was clicked from */}
    </Modal> )
  }

  render() {
    let bundleKeys = this.state.bundleKeys;
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
          {bundleKeys.map(key => { //dynamic bundle button
            return (
              <button type="button" value={key} class="btn btn-sm btn-pill btn-info" onClick = {this.handleOpenModal}> Week {key} </button>
            )
          })}
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
