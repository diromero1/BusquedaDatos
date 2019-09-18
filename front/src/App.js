import React from 'react';
import './App.css';
import Url from './component/url'
import NavioComp from './component/navioComp'

class App extends React.Component {
  state = {
    url: '',
    datos: [],
    pagina: 1
  }


  searchData = (url) => {
    console.log(url+'$limit=100&$offset='+(this.state.pagina-1)*100)
    fetch(url+'$limit=100&$offset='+(this.state.pagina-1)*100)
      .then(res => res.json())
      .then(data => {
        this.setState({
          datos: data,
          url: url
        });
      })
      .then(NavioComp.update);
  }

  irAtras = () => {
    if(this.state.pagina !== 1){
      this.setState({pagina: this.state.pagina-1});
      console.log("Pagina", this.state.pagina)
    }else{
      console.log("Estas en la pagina 1");
    }
  }

  irAdelante = () => {
    if(this.state.datos.length===100){
      this.setState({pagina: this.state.pagina+1});
      console.log("Pagina", this.state.pagina)
    }else{
      console.log("Estas en la ultima pagina");
    }
  }

  componentDidUpdate(prevProps, prevState) {
  // only update chart if the data has changed
  let url = this.state.url
  if (prevState.pagina !== this.state.pagina) {
    console.log(url+'$limit='+this.state.pagina*100+'&$offset='+(this.state.pagina-1)*100)
    fetch(url+'$limit='+this.state.pagina*100+'&$offset='+(this.state.pagina-1)*100)
      .then(res => res.json())
      .then(data => {
        this.setState({
          datos: data,
          url: url
        });
      })
      .then(NavioComp.update);
  }
}

  render(){
    return(<div>
        <h1>URL:</h1>
        <Url searchData={this.searchData}/>
        <NavioComp data={this.state.datos}/>
        <button onClick={this.irAtras}>Atras</button>
        <button onClick={this.irAdelante}>Adelante</button>
      </div>)
  }
}

export default App;
