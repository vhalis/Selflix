import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal } from 'semantic-ui-react';

import MovieTile from './MovieTile.jsx';


export default class MovieModal extends React.Component {

    static propTypes = {
        movieData: PropTypes.objectOf(MovieTile.propTypes),
        modalOpen: PropTypes.bool,
        onClose: PropTypes.func.isRequired,
    }

    static defaultProps = {
        modalOpen: false,
    }

    render() {
        const { modalOpen, onClose } = this.props;
        const closeButton = (
            <Icon circular inverted color='teal' name='close' onClick={onClose} />
        );
        return (
            <Modal
                closeIcon={closeButton}
                open={modalOpen}
                >
            </Modal>
        );
    }
}