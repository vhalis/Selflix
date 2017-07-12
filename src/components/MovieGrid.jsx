import React from 'react';
import PropTypes from 'prop-types';

import AddNewTile from './AddNewTile.jsx';
import MovieTile from './MovieTile.jsx';
import MovieModal from './MovieModal.jsx';

import { Message } from 'semantic-ui-react';

import './MovieGrid.css';


export default class MovieGrid extends React.Component {

    static propTypes = {
        onAddNewMovieClick: PropTypes.func.isRequired,
        isSearching: PropTypes.bool,

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
        isSearching: false,
    }

    state = {
        clickedMovie: -1,
    }

    componentWillReceiveProps(nextProps) {
        // Cancel clicked state if movies get filtered
        // Not strictly necessary with the modal overlay
        if (nextProps.movies.length !== this.props.movies.length) {
            this.setState({clickedMovie: -1});
        }
    }

    onMovieTileClick = (id) => {
        this.setState((prevState) => ({
            clickedMovie: prevState.clickedMovie !== id ? id : -1, 
        }));
    }

    render () {
        const { clickedMovie } = this.state;

        var movieTiles = this.props.movies.map((movieData, id) => {
            if (id === clickedMovie) {
                return (
                    <MovieModal 
                        key={id}
                        onClose={() => this.onMovieTileClick(id)}
                        {...movieData} />
                );
            } else {
                return (
                    <div key={id} className="gridcontent">
                        <MovieTile
                            onClick={() => this.onMovieTileClick(id)}
                            {...movieData} />
                    </div>
                );
            }

        });

        if (!this.props.isSearching) {
            movieTiles.unshift(
                <div key="addnew" className="gridcontent">
                    <AddNewTile
                        onClick={this.props.onAddNewMovieClick} />
                </div>
            );
        }

        const noMoviesMsg = ( 
            <div>
                <Message 
                    content='No movies found...' 
                    icon='search' 
                    size='massive' 
                    compact />
            </div>
        );

        return (
            <div className="gridwrapper">
                {movieTiles.length > 0
                 ? movieTiles
                 : noMoviesMsg}
            </div>
        );
    }
}