import React, { Component } from 'react';
import './App.css';

import { Container } from 'semantic-ui-react';
import MovieGrid from './components/MovieGrid.jsx';
import SortBy from './components/SortBy.jsx';

export default class App extends Component {
  render() {
    return (
      <Container>
      <div className='headerwrapper'>
        <div id='headertext'>SELFLIX</div>
        <div id='sortmenu'><SortBy /></div>
      </div>
      </Container>
    );
  }
}