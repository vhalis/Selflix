import React from 'react';

import './App.css';

import AddNewButton from './components/AddNewButton.jsx';
import AddMovieModal from './components/AddMovieModal.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import SortBy from './components/SortBy.jsx';
import SearchForm from './components/SearchForm.jsx';


const MOVIE_COUNT_KEY = 'storedMovieCount';
const MOVIE_STORE_KEY = 'storedMovieNumber';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      movieList: [],
      numberOfMovies: 0,
    };
  }

  componentWillMount () {
    this.loadMovies();
  }

  createNewMovie = ({
    movieActors,
    movieDescription,
    movieGenres,
    movieImage,
    movieReleaseDate,
    movieTitle,
  }) => {
    const newMovie = {
      movieActors: movieActors,
      movieDescription: movieDescription,
      movieGenres: movieGenres,
      movieImage: movieImage,
      movieReleaseDate: movieReleaseDate,
      movieTitle: movieTitle,
    };
    this.setState((prevState) => prevState.movieList.push(newMovie));
    this.saveMovie(newMovie);
  }

  doModalClose = (e) => {
    this.setState({modalOpen: false});
  }

  doModalOpen = (e) => {
    this.setState({modalOpen: true});
  }

  loadMovies () {
    const movieCount = parseInt(localStorage.getItem(MOVIE_COUNT_KEY), 10);
    if (movieCount) {
      var movieList = [];
      var curMovie = 0;
      while (curMovie < movieCount) {
        movieList.push(this.loadMovie(curMovie++));
      }
      this.setState({
        movieList: movieList,
        numberOfMovies: movieCount,
      });
    }
  }

  loadMovie (movieNum) {
    return JSON.parse(localStorage.getItem(MOVIE_STORE_KEY + movieNum));
  }

  saveMovie = (movieObj) => {
    var { numberOfMovies } = this.state;
    localStorage.setItem(
      MOVIE_STORE_KEY + numberOfMovies,
      JSON.stringify(movieObj));
    numberOfMovies += 1;
    localStorage.setItem(MOVIE_COUNT_KEY, numberOfMovies);
    this.setState({numberOfMovies: numberOfMovies});
  }

  render() {
    const { modalOpen, movieList } = this.state;

    return (
      <div className="mainbody">
        <div className="headerwrapper">
          <div className="headerleft">SELFLIX</div>
          <div className="headerright"><SearchForm /></div>
        </div>
        <SortBy />
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