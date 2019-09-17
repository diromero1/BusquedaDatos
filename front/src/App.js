import React from 'react';
import './App.css';
import navio from "navio";
import Url from './component/url'

class App extends React.Component {
  state = {
    data: []
  }


  searchData = () => {
  }

  render(){
    return(<div>
        <h1>URL:</h1>
        <Url searchData={this.searchData}/>
      </div>)
  }
}

export default App;
