import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Grid } from 'semantic-ui-react';

import './MovieTile.css';

export default class MovieTile extends React.Component {

    static propTypes = {
        movieActors: PropTypes.arrayOf(PropTypes.string),
        movieDescription: PropTypes.string,
        movieGenres: PropTypes.arrayOf(PropTypes.string),
        movieImage: PropTypes.string,
        movieReleaseDate: PropTypes.string,
        movieTitle: PropTypes.string,
    }

    static defaultProps = {
        movieActors: [],
        movieGenres: [],
    }
    

    render() {

        const actorList = this.props.movieActors.join(", ");
        const genreList = this.props.movieGenres.join(", ");

        return (
            <Card color='teal' link >
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
                <Card.Description>
                <div className="overflowingtextblock">
                    <p>{this.props.movieDescription}</p>
                    <p><strong>Actors:</strong> {actorList || "Not available"}</p>                           
                    <p><strong>Genres:</strong> {genreList || "Not available"}</p>     
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