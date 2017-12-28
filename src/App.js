import React, { Component } from 'react';
import logo from './logo.svg';
import styled from "styled-components"
import './App.css';

const Cont = styled.div`
  margin-top:10px;
  width:500px;
`;

class App extends Component {
  state = {
    value:0
  }

  add = () => {
    console.log('ddd')
    this.setState({value:(this.state.value)+1})
  }
  del = () => {
    console.log('eiei')
    if(this.state.value != 0){
    this.setState({value:(this.state.value)-1})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Cont>
          <button onClick={this.add}> Add(+) </button> {this.state.value} <button onClick={this.del}> del(-) </button> 
        </Cont>
      </div>
    );
  }
}

export default App;
