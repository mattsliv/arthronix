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
import pdfFile2 from './PDFs/leg2.pdf'
import pdfFile3 from './PDFs/description.pdf'
import pdfFile4 from './PDFs/knee.pdf'
import pdfFile5 from './PDFs/paper.pdf'
import CreateBundle from './CreateBundleView'
import Video from './VideoModal'
import {Document,Page} from 'react-pdf'

class PdfView extends Component {
constructor (props){
    super(props);
    this.state = {
      numPages: 2,
      pageNumber: 1,
      pdfID: props.pdfID,
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
        <Document file = {this.state.pdfID} onLoadSucess={this.onDocumentLoad}>
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
       showModal: false,
       id: null

      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal (openEvent) {
      this.setState({ showModal: true, id: openEvent.target.id });
    }

    handleCloseModal () {
      this.setState({ showModal: false });
    }


  getModal () {
      return (
      <Modal isOpen = {this.state.showModal}>
           <text style={{color: 'black'}}> <font size = '5'> Viewing PDF </font></text>
           <PdfView pdfID= {this.state.id}/>
           <div align = 'right'>
            <button type="button" class="btn btn-primary" onClick = {this.handleCloseModal} style = {{position: 'fixed', bottom: '50px', right: '50px'}}> Close </button>
          </div>
      </Modal> )
    }

    render() {
      return (
        <div>
        <h3>Educational Support</h3>
        <button type="button" class="btn btn-primary" style = {{float: 'right', margin: '2em'}} onClick = {this.handleOpenModal} >
         + Add New Doc
        </button>
          <table>
            {this.getModal()}
            <img src = {pdf} class = 'pdf-image' onClick = {this.handleOpenModal} id = {pdfFile}/>
            <img src = {pdf} class = 'pdf-image' onClick = {this.handleOpenModal} id = {pdfFile2}/>
            <img src = {pdf} class = 'pdf-image' onClick = {this.handleOpenModal} id = {pdfFile3}/>
            <img src = {pdf} class = 'pdf-image' onClick = {this.handleOpenModal} id = {pdfFile4}/>
            <img src = {pdf} class = 'pdf-image' onClick = {this.handleOpenModal} id = {pdfFile5}/>

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
      <h3> Videos </h3>
        <button type="button" class="btn btn-primary" style = {{float: 'right', margin: '2em'}} onClick = {this.handleOpenModal} >
          + Add New Video
        </button>
        <table class="bundle-week-video">
          <tr padding="20px">


              {this.getModal()}

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
         <h3>Bundles</h3>
         <button type="button" value='0' class = "btn btn-primary" style = {{float: 'right', margin: '2em'}} onClick = {this.handleOpenModal}> +Add New Bundle </button>
         {this.getModal()} {/* The modal used throughout; only need one */}

        <table class="bundle-week-button">

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
