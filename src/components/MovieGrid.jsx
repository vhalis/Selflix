import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, Container } from 'semantic-ui-react';

import AddNewTile from './AddNewTile.jsx';
import MovieTile from './MovieTile.jsx';

export default class MovieGrid extends React.Component {

    static propTypes = {
        onAddNewMovieClick: PropTypes.func.isRequired,

        movies: PropTypes.arrayOf(PropTypes.objectOf(MovieTile.propTypes)), 
    }

    static defaultProps = {
        movies: [],
    }

    constructor(props) {
        super(props);
        this.state = {
            clickedMovie: -1,
        }
    }

    onMovieTileClick = (id) => {
        this.setState((prevState) => ({
            clickedMovie: prevState.clickedMovie !== id ? id : -1, 
        }));
    }

    render () {
        const { clickedMovie } = this.state;

        var movieTiles = this.props.movies.map((movieData, id) =>
            <MovieTile
                key={id}
                hideBody={id !== clickedMovie}
                onClick={() => this.onMovieTileClick(id)}
                {...movieData} />
        );
        movieTiles.unshift(
            <AddNewTile
                key='addnew'
                onClick={this.props.onAddNewMovieClick} />
        );

        return (
            <div class="gridwrapper">
                {movieTiles}
            </div>
        );
    }
}