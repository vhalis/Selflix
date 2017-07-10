import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import './App.css';

import AddNewButton from './components/AddNewButton.jsx';
import AddMovieModal from './components/AddMovieModal.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import SortBy from './components/SortBy.jsx';
import SearchForm from './components/SearchForm.jsx';


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
      <div className="mainbody">
        <div className="headerwrapper">
          <div className="headerleft">SELFLIX</div>
          <div className="headerright"><SearchForm /></div>
        </div>
        <div className="sortmenu"><SortBy /></div>
        <MovieGrid onAddNewMovieClick={this.doModalOpen} />
        <AddNewButton onClick={this.doModalOpen} />
        <AddMovieModal
            onClose={this.doModalClose}
            modalOpen={modalOpen}
            />
      </div>
    );
  }
}

// 