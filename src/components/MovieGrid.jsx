import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import AddNewButton from './AddNewButton.jsx';
import AddNewTile from './AddNewTile.jsx';
import MovieModal from './MovieModal.jsx';
import MovieTile from './MovieTile.jsx';


export default class MovieGrid extends React.Component {

    static propTypes = {
        movies: PropTypes.arrayOf(PropTypes.objectOf(MovieTile.propTypes)), 
    }

    static defaultProps = {
        movies: [],
    }

    state = {
        modalOpen: false,
    }

    doModalClose = (e) => {
        this.setState({modalOpen: false});
    }

    doModalOpen = (e) => {
        this.setState({modalOpen: true});
    }

    render () {
        const { modalOpen } = this.state;
        var movieTiles = this.props.movies.map((movieData, id) =>
            <MovieTile key={id} {...movieData} />
        );
        movieTiles.unshift(<AddNewTile key='addnew' onClick={this.doModalOpen}/>);
        return (
<<<<<<< HEAD
            <Card.Group>{movieTiles}</Card.Group>
=======
            <div>
                <Card.Group className="stackable grid">
                    {movieTiles}
                </Card.Group>
                <AddNewButton onClick={this.doModalOpen} />
                <MovieModal
                    onClose={this.doModalClose}
                    modalOpen={modalOpen}
                    />
            </div>
>>>>>>> 92db78f84f2c001768e273c7e862d21fffb96efe
        );
    }
}