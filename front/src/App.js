import React from 'react';
import './App.css';
import navio from "navio";
import Url from './component/url'

class App extends React.Component {
  state = {
    data: []
  }


  searchData = (url) => {
    fetch(url).then(res => res.json).then(data => this.setState({data: data}));
    const nv = new navio(this.myDiv,600)
  }

  render(){
    return(<div>
        <h1>URL:</h1>
        <Url searchData={this.searchData}/>
      </div>)
  }
}

export default App;
