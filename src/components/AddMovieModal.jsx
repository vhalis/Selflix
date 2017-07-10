import React from 'react';
import PropTypes from 'prop-types';
import { Container, Dropdown, Form, Grid, Icon, Modal } from 'semantic-ui-react';


const movieSuggestions = [
    {
        movieActors: "Tim Robbins, Morgan Freeman, Bob Gunton",
        movieDescription: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        movieGenres: "Crime, Drama",
        movieImage: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
        movieReleaseDate: "1994",
        movieTitle: "The Shawshank Redemption",
    },
    {
        movieActors: " Marlon Brando, Al Pacino, James Caan",
        movieDescription: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        movieGenres: "Crime, Drama",
        movieImage: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
        movieReleaseDate: "1972",
        movieTitle: "The Godfather",
    },
    {
        movieActors: " Al Pacino, Robert De Niro, Robert Duvall",
        movieDescription: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        movieGenres: "Crime, Drama",
        movieImage: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,702,1000_AL_.jpg",
        movieReleaseDate: "1974",
        movieTitle: "The Godfather: Part II",
    },
    {
        movieActors: " Christian Bale, Heath Ledger, Aaron Eckhart ",
        movieDescription: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        movieGenres: "Action, Crime, Drama, Thriller",
        movieImage: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        movieReleaseDate: "2008",
        movieTitle: "The Dark Knight",
    },
    {
        movieActors: " Henry Fonda, Lee J. Cobb, Martin Balsam",
        movieDescription: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
        movieGenres: "Crime, Drama",
        movieImage: "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        movieReleaseDate: "1957",
        movieTitle: "12 Angry Men",
    },
    {
        movieActors: " Liam Neeson, Ralph Fiennes, Ben Kingsley",
        movieDescription: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
        movieGenres: "Biography, Drama, History",
        movieImage: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        movieReleaseDate: "1993",
        movieTitle: "Schindler's List",
    },
    {
        movieActors: " John Travolta, Uma Thurman, Samuel L. Jackson",
        movieDescription: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        movieGenres: "Crime, Drama",
        movieImage: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
        movieReleaseDate: "1994",
        movieTitle: "Pulp Fiction",
    },
]


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

    setDummyDataToState = (e, {value}) => {
        this.setState({...movieSuggestions[value]});
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


        const suggestionsOptions = [0, 1, 2, 3, 4, 5, 6].map((i) => {
            return { value: i, text: movieSuggestions[i].movieTitle };
        })
        const suggestionsDropdown = (
            <Dropdown
                selection
                onChange={this.setDummyDataToState}
                options={suggestionsOptions}
                placeholder='Select dummy movie' />
        );

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
                <Modal.Header>
                    <Grid columns={2} verticalAlign='middle'>
                        <Grid.Column>Add a New Movie</Grid.Column>
                        <Grid.Column floated='right'>
                            <Container textAlign='right'>
                                {suggestionsDropdown}
                            </Container>
                        </Grid.Column>
                    </Grid>
                </Modal.Header>
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
                                color='red'
                                content='Cancel'
                                onClick={this.closeModal}/>
                        </Form.Group>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}