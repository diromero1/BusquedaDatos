import React, { Component } from 'react';
import navio from "navio";

export default class NavioComp extends Component {

  state = {
    url : ''
  }

  update = () => {
    
  }

  componentDidUpdate(prevProps, prevState) {
  // only update chart if the data has changed
  if (prevProps.data !== this.props.data) {
    var nv = new navio(this.linkInput, 600);
    nv.data(this.props.data);
    nv.addAllAttribs();
  }
}

  render() {  
    return (
      <div>
        <div id="navio" ref={linkInput => this.linkInput = linkInput}></div>
      </div>
    );
  }
}
