import React from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, Header, Icon } from 'semantic-ui-react';

import MovieTile from './MovieTile.jsx';

export default class MovieModal extends React.Component {

    state = { modalOpen: true }

    handleOpen = (e) => this.setState({
        modalOpen: true,
    })

    handleClose = (e) => this.setState({
        modalOpen: false,
    })

    render() {
        return (
        <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            dimmer='blurring'
            size='fullscreen'
            basic
        >
            <Modal.Content>
                {this.props.children}
            </Modal.Content>
        </Modal>
        )
    }
}