import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

import './AddNewTile.css';


export default class AddNewTile extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
    }

    render () {
        return (
            <Card color='teal' link fluid onClick={this.props.onClick} >
                <Card.Content className="totallycentered">
                    <Icon.Group size='huge'>
                        <Icon circular inverted name='film' color='teal'/>
                        <Icon corner name='add' color='teal' />
                    </Icon.Group>
                </Card.Content>
            </Card>
        );
    }
}