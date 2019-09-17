import React from 'react';
import './App.css';
import Url from './component/url'

class App extends React.Component {
  state = {
    url: '',
    datos: []
  }


  searchData = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          datos: data,
          url: url
        });
      });
  }

  render(){
    return(<div>
        <h1>URL:</h1>
        <Url searchData={this.searchData}/>
      </div>)
  }
}

export default App;
