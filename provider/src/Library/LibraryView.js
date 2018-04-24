import React , { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Modal from 'react-modal'
import pdf from '../images/pdf.png';
import p1 from './pdf previews/1.png';
import p2 from './pdf previews/2.png';
import p3 from './pdf previews/3.png'
import p4 from './pdf previews/4.png'
import p5 from './pdf previews/5.png'
import pdfFile from './PDFs/leg.pdf'
import pdfFile2 from './PDFs/leg2.pdf'
import pdfFile3 from './PDFs/description.pdf'
import pdfFile4 from './PDFs/knee.pdf'
import pdfFile5 from './PDFs/paper.pdf'
import CreateBundle from './CreateBundleView'
import '../styles/docs/assets/css/library/styles.css';
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
        <div class = 'col-md-12'>
        <h3>Educational Support
          <button type="button" class="btn btn-primary" style = {{float: 'right', marginRight: '10px'}}onClick = {this.handleOpenModal} > + Add New Doc </button>
        </h3>
        </div>
        {this.getModal()}
        <div class = 'container'>

          <div class = 'row'>
            <div class = 'col-md-2'>
                <img src = {p1} class = 'pdf-image' onClick = {this.handleOpenModal} id = {pdfFile} />
                <div class = 'cap' align='center'><text> <font size = '3'>Leg Strength (1)</font></text></div>
            </div>
            <div class = 'col-md-2'>
                <img src = {p2}class = 'pdf-image' onClick = {this.handleOpenModal} id = {pdfFile2}/>
                <div class = 'cap' align='center'><text> <font size = '3'>Leg Strength (2)</font></text></div>
            </div>
            <div class = 'col-md-2'>
                <img src = {p3}class = 'pdf-image' onClick = {this.handleOpenModal} id = {pdfFile3}/>
                <div class = 'cap' align='center'><text> <font size = '3'>Physical Therapy</font></text></div>
            </div>
            <div class = 'col-md-2'>
                <img src = {p4}class = 'pdf-image' onClick = {this.handleOpenModal} id = {pdfFile4}/>
                <div class = 'cap' align='center'><text> <font size = '3'>Information</font></text></div>
            </div>
            <div class = 'col-md-2'>
                <img src = {p5}class = 'pdf-image' onClick = {this.handleOpenModal} id = {pdfFile5}/>
                <div class = 'cap' align='center'><text> <font size = '3'>Paper</font></text></div>
            </div>

          </div>
        </div>
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
      <div class = 'row'>
        <div class = 'col'>
        <h3>Videos
          <button type="button" class="btn btn-primary" style = {{float: 'right', marginRight: '10px'}}onClick = {this.handleOpenModal} > + Add New Video </button>
        </h3>
        </div>
      </div>
        <div class = 'container'>
               {this.getModal()}
          <div class = 'row'>
            <div class = 'col-md-2'>
                 <img src = "https://img.youtube.com/vi/o5b0gS7wI1k/0.jpg" class = 'video-thumbnail' onClick = {this.handleOpenModal} id = 'https://www.youtube.com/embed/o5b0gS7wI1k' />
                <div class = 'cap' align='center'><text> <font size = '3'>Knee Pain Exercises</font></text></div>
            </div>
            <div class = 'col-md-2'>
                 <img src = "https://img.youtube.com/vi/A7OTduW8QqI/0.jpg" class = 'video-thumbnail' onClick = {this.handleOpenModal} id = 'https://www.youtube.com/embed/A7OTduW8QqI'/>

                <div class = 'cap' align='center'><text> <font size = '3'>Hip Pain Exercises</font></text></div>
            </div>
            <div class = 'col-md-2'>
                <img src = "https://img.youtube.com/vi/9Vs7-M-pkNA/0.jpg" class = 'video-thumbnail' onClick = {this.handleOpenModal} id= 'https://www.youtube.com/embed/9Vs7-M-pkNA'/>
                <div class = 'cap' align='center'><text> <font size = '3'>Range of Motion</font></text></div>
            </div>
            <div class = 'col-md-2'>
                 <img src = "https://img.youtube.com/vi/3OiJqAtPQUc/0.jpg" class = 'video-thumbnail' onClick = {this.handleOpenModal} id = 'https://www.youtube.com/embed/3OiJqAtPQUc'/>
                <div class = 'cap' align='center'><text> <font size = '3'>Hip ROM</font></text></div>
            </div>
            <div class = 'col-md-4'>
                   <img src = "https://img.youtube.com/vi/1uwAyZ2RyLQ/0.jpg" class = 'video-thumbnail' onClick = {this.handleOpenModal} id = 'https://www.youtube.com/embed/1uwAyZ2RyLQ'/>
                <div class = 'cap' align='center'><text> <font size = '3'>Leg Stretch</font></text></div>
            </div>

          </div>
        </div>
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
      <div class = 'row'>
        <div class = 'col'>
        <h3>Bundles
          <button type="button" value = '0' class="btn btn-primary" style = {{float: 'right',marginRight: '10px'}}onClick = {this.handleOpenModal} > + Add New Bundle </button>
        </h3>
        </div>
      </div>
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
