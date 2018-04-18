import React, { Component } from 'react';

class Video extends Component {

  constructor (props){
    super(props);
     this.state = {
       videoID: props.videoID
     };

  }
  render () {
    return (
      <div>
      <text style={{color: 'black'}}> <font size = '5'> Viewing Video </font></text>
      <div align = 'center'>
        <p>{this.state.videoID}</p>
        <iframe width= "720" height = "486" src= {this.state.videoID} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      </div>
    )
  }
}
export default Video;
