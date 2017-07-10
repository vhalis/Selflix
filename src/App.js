import React from 'react';

import AddNewButton from './components/AddNewButton.jsx';
import AddMovieModal from './components/AddMovieModal.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import SortBy from './components/SortBy.jsx';
import SearchForm from './components/SearchForm.jsx';

import './App.css';


const MOVIE_COUNT_KEY = 'storedMovieCount';
const MOVIE_STORE_KEY = 'storedMovieNumber';

export default class App extends React.Component {

  state = { 
    // Modal parameters
    modalOpen: false,

    // Movie storage parameters
    movieList: [],
    numberOfMovies: 0,

    // Sort paramters
    sortOrder: 'ascending',
    sortType: 'title',
  }

  componentWillMount () {
    this.loadMovies();
  }

  // Modal methods
  doModalClose = (e) => {
    this.setState({modalOpen: false});
  }

  doModalOpen = (e) => {
    this.setState({modalOpen: true});
  }
  // End modal methods

  // Storage methods
  createNewMovie = ({
    movieActors,
    movieDescription,
    movieGenres,
    movieImage,
    movieReleaseDate,
    movieTitle,
  }) => {
    const newMovie = {
      movieActors: movieActors.sort(),
      movieDescription: movieDescription,
      movieGenres: movieGenres.sort(),
      movieImage: movieImage,
      movieReleaseDate: movieReleaseDate,
      movieTitle: movieTitle,
    };
    this.setState((prevState) => prevState.movieList.push(newMovie));
    this.saveMovie(newMovie);
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
  // End storage methods

  // Sort methods
  onChangeOrderBy = (orderBy) => {
    this.setState((prevState) => {
      if (orderBy !== prevState.sortOrder) {
        return {sortOrder: orderBy};
      } else {
        return {};
      }
    });
  }

  onChangeSortType = (sortBy) => {
    this.setState((prevState) => {
      if (sortBy !== prevState.sortType) {
        return {sortType: sortBy};
      } else {
        return {};
      }
    });
  }

  sortByGenre(a, b) {
    const aLength = a.movieGenres.length;
    const bLength = b.movieGenres.length;

    if (aLength > 0 && bLength > 0) {
      var temp = 0;
      for (var i=0; i < aLength && i < bLength; ++i) {
        temp = a.movieGenres[i].localeCompare(b.movieGenres[i]);
        if (temp !== 0) {
          break;
        }
      }
      return temp;
    } else if (aLength > 0) {
      return -1;
    } else if (bLength > 0) {
      return 1;
    }

    return 0;
  }

  sortByReleaseDate(a, b) {
    if (a.movieReleaseDate && b.movieReleaseDate) {
      return a.movieReleaseDate.localeCompare(b.movieReleaseDate);
    } else if (a.movieReleaseDate) {
      return -1;
    } else if (b.movieReleaseDate) {
      return 1;
    }

    return 0;
  }

  sortByTitle(a, b) {
    return a.movieTitle.localeCompare(b.movieTitle);
  }

  getSortMovieFunction = (sortType, reverse) => {
    const flip = reverse ? -1 : 1;

    if (sortType === 'title') {
      return ((a, b) => this.sortByTitle(a, b) * flip);
    } else if (sortType === 'genre') {
      return ((a, b) => this.sortByGenre(a, b) * flip);
    } else if (sortType === 'releaseDate') {
      return ((a, b) => this.sortByReleaseDate(a, b) * flip);
    }

    return (() => 0);
  } 
  // End sort methods

  render() {
    const { modalOpen, sortOrder, sortType } = this.state;
    var { movieList } = this.state;
    const reverse = sortOrder === 'ascending' ? false : true;

    movieList.sort(this.getSortMovieFunction(sortType, reverse));

    return (
      <div className="mainbody">
        <div className="headerwrapper">
          <div className="headerleft">SELFLIX</div>
          <div className="headerright"><SearchForm /></div>
        </div>
        <SortBy 
          activeOrder={sortOrder} 
          activeType={sortType}
          onChangeOrderBy={this.onChangeOrderBy}
          onChangeSortType={this.onChangeSortType} />
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