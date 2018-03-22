import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import pdf from '../images/pdf.png';
import CreateBundle from './CreateBundleView'

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
  render() {
    return (
      <Router>
      <div>
        <table class="bundle-week-button">
          <tr padding="20px">
            <td><h3>Bundles</h3></td>
            <td>
              <ul>
                  <li><Link to="/createBundle" activeClassName="active"><a href="#" class="btn btn-primary"> + Add New</a></Link></li>
                  <li>   <button type="button" class="btn btn-primary" >
                      Expand All
                      </button>
                  </li>
              </ul>
            </td>

          </tr>
          <button type="button" class="btn btn-sm btn-pill btn-info">Week 1</button>
          <button type="button" class="btn btn-sm btn-pill btn-info">Week 2</button>
          <button type="button" class="btn btn-sm btn-pill btn-info">Week 3</button>
          <button type="button" class="btn btn-sm btn-pill btn-info">Week 4</button>
          <button type="button" class="btn btn-sm btn-pill btn-info">Week 5</button>
        </table>
        <Switch>
          <Route path="/createBundle" component={CreateBundle}/>
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
