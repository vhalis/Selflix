import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

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
        movieTitle: PropTypes.string.isRequired,
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
        const cardOptions = {onClick: hideBody ? onClick : false};
        const imageThumb = (
            <div className="thumbnailer">
                 <Image src={this.props.movieImage} width="100%" />
            </div>
        );
        const imageFull = (
            <Image src={this.props.movieImage} width="50%" />
        );
        return (
            <Card color='teal' fluid {...cardOptions} >
                { hideBody ? imageThumb : imageFull}
                <Card.Content>
                    <Card.Header>
                        {this.props.movieTitle}
                    </Card.Header>
                    <Card.Meta>
                        {this.props.movieReleaseDate}
                    </Card.Meta>
                </Card.Content>
                <Card.Content className={bodyContentClass}>
                    <Card.Description>
                        <p>{this.props.movieDescription}</p>
                        <p><strong>Actors:</strong> {actorList || "Not available"}</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra className="textcutoff">
                    <strong>Genres:</strong> {genreList || "Not available"}
                </Card.Content>
            </Card>
            </div>
        );
    }
}