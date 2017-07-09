import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import AddNewTile from './AddNewTile.jsx';
import MovieTile from './MovieTile.jsx';


export default class MovieGrid extends React.Component {

    static propTypes = {
        movies: PropTypes.arrayOf(PropTypes.objectOf(MovieTile.propTypes)), 
        onAddNewMovieClick: PropTypes.func.isRequired,
    }

    static defaultProps = {
        movies: [],
    }

    render () {
        var movieTiles = this.props.movies.map((movieData, id) =>
            <MovieTile key={id} {...movieData} />
        );
        movieTiles.unshift(<AddNewTile key='addnew' onClick={this.props.onAddNewMovieClick}/>);
        return (
            <div>
                <Card.Group stackable>
                    {movieTiles}
                </Card.Group>
            </div>
        );
    }
}