import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

import './MovieTile.css';


export default class MovieTile extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,

        movieActors: PropTypes.arrayOf(PropTypes.string),
        movieDescription: PropTypes.string,
        movieGenres: PropTypes.arrayOf(PropTypes.string),
        movieImage: PropTypes.string,
        movieReleaseDate: PropTypes.string,
        movieTitle: PropTypes.string.isRequired,
    }

    static defaultProps = {
        movieActors: [],
        movieGenres: [],
    }

    render() {
        const { movieGenres, onClick } = this.props;
        const genreList = movieGenres.join(", ");

        return (
            <Card color='teal' link fluid onClick={onClick}>
                <div className="thumbnailer">
                    <Image src={this.props.movieImage} width="100%" />
                </div>
                <Card.Content>
                    <Card.Header>
                        {this.props.movieTitle}
                    </Card.Header>
                    <Card.Meta>
                        {this.props.movieReleaseDate}
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra className="textcutoff">
                    <strong>Genres:</strong> {genreList || "Not available"}
                </Card.Content>
            </Card>
        );
    }
}