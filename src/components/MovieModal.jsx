import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';


export default class MovieModal extends React.Component {

    static propTypes = {
        onClose: PropTypes.func.isRequired,
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

        return (
            <Modal
                basic
                open={isOpen}
                onClose={this.onClose}
                dimmer='blurring'
                size='fullscreen'
                >
                <Modal.Content>
                    {this.props.children}
                </Modal.Content>
            </Modal>
        );
    }
}