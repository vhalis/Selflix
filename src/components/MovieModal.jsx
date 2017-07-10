import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Image, Header } from 'semantic-ui-react';


export default class MovieModal extends React.Component {

    static propTypes = {
        onClose: PropTypes.func.isRequired,

        movieActors: PropTypes.arrayOf(PropTypes.string),
        movieDescription: PropTypes.string,
        movieGenres: PropTypes.arrayOf(PropTypes.string),
        movieImage: PropTypes.string,
        movieReleaseDate: PropTypes.string,
        movieTitle: PropTypes.string.isRequired,
    }

    state = {
        isOpen: true,
    }

    onClose = (e) => {
        this.setState({isOpen: false});
        this.props.onClose();
    }

    render() {
        const { isOpen } = this.state;
        const actorList = this.props.movieActors.join(", ");
        const genreList = this.props.movieGenres.join(", ");

        return (
            <Modal
                open={isOpen}
                onClose={this.onClose}
                dimmer='blurring'
                size='fullscreen'
                >

                <Modal.Content image>
                    <Image src={this.props.movieImage} wrapped />
                    <Modal.Description>
                        <Header>{this.props.movieTitle}
                            <Header sub>{this.props.movieReleaseDate}</Header>
                        </Header>
                        <Header sub>Synopsis</Header>
                        <p>{this.props.movieDescription}</p>
                        <Header sub>Starring</Header>
                        <p>{actorList || "Not available"}</p>
                        <Header sub>Genres</Header>
                        <p>{genreList || "Not available"}</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}