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
      movieList: [],
    };
  }

  createNewMovie = ({
    movieActors,
    movieDescription,
    movieGenres,
    movieImage,
    movieReleaseDate,
    movieTitle,
  }) => {
    this.setState((prevState) => (
      prevState.movieList.push({
        movieActors: movieActors,
        movieDescription: movieDescription,
        movieGenres: movieGenres,
        movieImage: movieImage,
        movieReleaseDate: movieReleaseDate,
        movieTitle: movieTitle,
      })
    ));
  }

  doModalClose = (e) => {
    this.setState({modalOpen: false});
  }

  doModalOpen = (e) => {
    this.setState({modalOpen: true});
  }

  render() {
    const { modalOpen, movieList } = this.state;

    return (
      <div className="mainbody">
        <div className="headerwrapper">
          <div className="headerleft">SELFLIX</div>
          <div className="headerright"><SearchForm /></div>
        </div>
        <div className="sortmenu"><SortBy /></div>
        <MovieGrid
          onAddNewMovieClick={this.doModalOpen}
          movies={movieList} />
        <AddNewButton onClick={this.doModalOpen} />
        <AddMovieModal
          createNewMovie={this.createNewMovie}
          onClose={this.doModalClose}
          modalOpen={modalOpen}
          />
      </div>
    );
  }
}

// 