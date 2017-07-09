import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import './App.css';

import AddNewButton from './components/AddNewButton.jsx';
import AddMovieModal from './components/AddMovieModal.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import SortBy from './components/SortBy.jsx';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  doModalClose = (e) => {
    this.setState({modalOpen: false});
  }

  doModalOpen = (e) => {
    this.setState({modalOpen: true});
  }

  render() {
    const { modalOpen } = this.state;

    return (
      <Container fluid>
        <Container fluid>
          <div className='headerwrapper'>
            <div id='headertext'>SELFLIX</div>
            <div id='sortmenu'><SortBy /></div>
          </div>
        </Container>
        <Container fluid>
          <MovieGrid onAddNewMovieClick={this.doModalOpen} />
        </Container>
        <AddNewButton onClick={this.doModalOpen} />
        <AddMovieModal
            onClose={this.doModalClose}
            modalOpen={modalOpen}
            />
      </Container>
    );
  }
}