import React from 'react';
import PropTypes from 'prop-types';

import AddNewTile from './AddNewTile.jsx';
import MovieTile from './MovieTile.jsx';

import './MovieGrid.css';


export default class MovieGrid extends React.Component {

    static propTypes = {
        onAddNewMovieClick: PropTypes.func.isRequired,

        movies: PropTypes.arrayOf(PropTypes.shape({
            movieActors: PropTypes.arrayOf(PropTypes.string),
            movieDescription: PropTypes.string,
            movieGenres: PropTypes.arrayOf(PropTypes.string),
            movieImage: PropTypes.string,
            movieReleaseDate: PropTypes.string,
            movieTitle: PropTypes.string.isRequired,
        })), 
    }

    static defaultProps = {
        movies: [],
    }

    state = {
        clickedMovie: -1,
    }

    onMovieTileClick = (id) => {
        this.setState((prevState) => ({
            clickedMovie: prevState.clickedMovie !== id ? id : -1, 
        }));
    }

    render () {
        const { clickedMovie } = this.state;


        var movieTiles = this.props.movies.map((movieData, id) =>
            <div className={id === clickedMovie ? "selected" : "gridcontent"}>
                <MovieTile
                    key={id}
                    hideBody={id !== clickedMovie}
                    onClick={() => this.onMovieTileClick(id)}
                    {...movieData} />
            </div>
        );
        movieTiles.unshift(
            <div className="gridcontent">
                <AddNewTile
                    key='addnew'
                    onClick={this.props.onAddNewMovieClick} />
            </div>
        );

        return (
            <div className="gridwrapper">
                {movieTiles}
            </div>
        );
    }
}