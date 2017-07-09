import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import AddNewTile from './AddNewTile.jsx';
import MovieTile from './MovieTile.jsx';


class MovieGrid extends React.Component {

    static propTypes = {
       movies: PropTypes.arrayOf(MovieTile.propTypes), 
    }

    static defaultProps = {
        movies: [],
    }

    render () {
        var movieTiles = this.props.movies.map((movieData, id) =>
            <MovieTile key={id} {...movieData} />
        );
        movieTiles.unshift(<AddNewTile />);
        return (
            <Card.Group>
                {movieTiles}
            </Card.Group>
        );
    }
}

export default MovieGrid;