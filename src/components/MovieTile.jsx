import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';


class MovieTile extends React.Component {

    static propTypes = {
        movieActors: PropTypes.arrayOf(PropTypes.string),
        movieDescription: PropTypes.string,
        movieGenre: PropTypes.string,
        movieReleaseDate: PropTypes.string,
        movieTitle: PropTypes.string,
    }

    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>
                        {this.props.movieTitle}
                    </Card.Header>
                    <Card.Meta>
                        <span className="date">
                            {this.props.movieReleaseDate}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {this.props.movieDescription}
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default MovieTile;