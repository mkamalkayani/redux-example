import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Posts";
import Postform from "./components/Postform";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to React</h2>
          </div>
          <Postform />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
