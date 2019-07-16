import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Posts'
import Postform from './components/Postform'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Postform></Postform>
        <Post></Post>
      </div>
    );
  }
}

export default App;