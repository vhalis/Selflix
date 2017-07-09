import React, { Component } from 'react';
import './App.css';

import AddNew from './components/AddNew.jsx';
import Header from './components/Header.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AddNew />
      </div>
    );
  }
}

export default App;