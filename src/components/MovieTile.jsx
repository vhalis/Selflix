import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Grid } from 'semantic-ui-react';

import './MovieTile.css';

export default class MovieTile extends React.Component {

    static propTypes = {
        hideBody: PropTypes.bool,
        onClick: PropTypes.func.isRequired,

        movieActors: PropTypes.arrayOf(PropTypes.string),
        movieDescription: PropTypes.string,
        movieGenres: PropTypes.arrayOf(PropTypes.string),
        movieImage: PropTypes.string,
        movieReleaseDate: PropTypes.string,
        movieTitle: PropTypes.string,
    }

    static defaultProps = {
        hideBody: true,

        movieActors: [],
        movieGenres: [],
    }

    render() {

        const { hideBody, onClick } = this.props;
        const actorList = this.props.movieActors.join(", ");
        const genreList = this.props.movieGenres.join(", ");
        const bodyContentClass = hideBody ? "contenthider" : "";

        return (
            <div className="gridcontent">
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
                <Card.Content className={bodyContentClass}>
                    <p>{this.props.movieDescription}</p>
                    <p><strong>Actors:</strong> {actorList || "Not available"}</p>
                    <p><strong>Genres:</strong> {genreList || "Not available"}</p>
                </Card.Content>
                <Card.Content extra>
                Lorem ipsum dolor sit amet
                </Card.Content>
            </Card>
            </div>
        );
    }
}