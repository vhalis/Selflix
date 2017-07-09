import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

import './MovieTile.css';

class MovieTile extends React.Component {

    static propTypes = {
        movieActors: PropTypes.arrayOf(PropTypes.string),
        movieDescription: PropTypes.string,
        movieGenre: PropTypes.string,
        movieImage: PropTypes.string,
        movieReleaseDate: PropTypes.string,
        movieTitle: PropTypes.string,
    }

    render() {
        return (
            <Card color='teal' link>
                <Image src={this.props.movieImage} />
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
                        <div className="textblock">
                            {this.props.movieDescription}
                        </div>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    Lorem ipsum dolor sit amet
                </Card.Content>
            </Card>
        );
    }
}

export default MovieTile;