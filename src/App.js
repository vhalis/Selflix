import React, { Component } from 'react';
import './App.css';

import AddNew from './components/AddNew.jsx';
import Header from './components/Header.jsx';
import MovieGrid from './components/MovieGrid.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieGrid />
        <AddNew />
      </div>
    );
  }
}

export default App;