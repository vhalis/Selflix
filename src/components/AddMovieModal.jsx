import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Modal } from 'semantic-ui-react';


export default class AddMovieModal extends React.Component {

    static propTypes = {
        createNewMovie: PropTypes.func.isRequired,
        modalOpen: PropTypes.bool,
        onClose: PropTypes.func.isRequired,
    }

    static defaultProps = {
        modalOpen: false,
    }

    state = {
        movieActors: "",
        movieDescription: "",
        movieGenres: "",
        movieImage: "",
        movieReleaseDate: "",
        movieTitle: "",
    }

    clearState = () => {
        this.setState({
            movieActors: "",
            movieDescription: "",
            movieGenres: "",
            movieImage: "",
            movieReleaseDate: "",
            movieTitle: "",
        });
    }

    closeModal = () => {
        this.clearState();
        this.props.onClose();
    }

    handleChange = (e, {name, value}) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        const {
            movieActors,
            movieDescription,
            movieGenres,
            movieImage,
            movieReleaseDate,
            movieTitle,
        } = this.state;
        this.props.createNewMovie({
            movieActors: (
                movieActors
                    .split(",")
                    .map((s) => s.trim())
                    .filter((s) => s !== "")
            ),
            movieDescription: movieDescription,
            movieGenres: (
                movieGenres
                    .split(",")
                    .map((s) => s.trim())
                    .filter((s) => s !== "")
            ),
            movieImage: movieImage,
            movieReleaseDate: movieReleaseDate,
            movieTitle: movieTitle,
        });
        this.closeModal();
    }

    render() {
        const { modalOpen } = this.props;
        const {
            movieActors,
            movieDescription,
            movieGenres,
            movieImage,
            movieReleaseDate,
            movieTitle,
        } = this.state;

        const closeButton = (
            <Icon
                circular
                inverted
                color='teal'
                name='close'
                onClick={this.closeModal} />
        );
        return (
            <Modal
                closeIcon={closeButton}
                open={modalOpen}
                dimmer='blurring'
                >
                <Modal.Header>Add a New Movie</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input
                            required
                            label='Title'
                            name='movieTitle'
                            onChange={this.handleChange}
                            value={movieTitle} />
                        <Form.Input
                            label='Release Date'
                            name='movieReleaseDate'
                            onChange={this.handleChange}
                            value={movieReleaseDate} />
                        <Form.Input
                            label='Genres'
                            name='movieGenres'
                            onChange={this.handleChange}
                            placeholder='Separate with commas'
                            value={movieGenres} />
                        <Form.Input
                            label='Actors'
                            name='movieActors'
                            onChange={this.handleChange}
                            placeholder='Separate with commas'
                            value={movieActors} />
                        <Form.TextArea
                            label='Description'
                            name='movieDescription'
                            onChange={this.handleChange}
                            rows='3'
                            value={movieDescription} />
                        <Form.Input
                            label='Image URL'
                            name='movieImage'
                            onChange={this.handleChange}
                            value={movieImage} />
                        <Form.Group>
                            <Form.Button color='teal' content='Create' />
                            <Form.Button
                                color='negative'
                                content='Cancel'
                                onClick={this.closeModal}/>
                        </Form.Group>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}