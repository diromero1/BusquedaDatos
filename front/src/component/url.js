import React, { Component } from 'react';

export default class Url extends Component {

  state = {
    url: ''
  }

  onSubmit = (e) =>{
    this.props.searchData(this.state.url)
    e.preventDefault();
  }

  onChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.onSubmit}>
          <br/>
          <br/>
          <textarea 
          name="url"
          placeholder="write an URL" 
          onChange={this.onChange} 
          value={this.state.url}></textarea>
          <br/>
          <button type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
