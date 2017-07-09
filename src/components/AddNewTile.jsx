import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Container } from 'semantic-ui-react';

import  './AddNewTile.css';

class AddNewTile extends React.Component {
    render () {
        return (
            <Card color='teal' link>
                <Card.Content className="totallycentered">
                    <Icon.Group size='big'>
                        <Icon circular inverted name='film' color='teal'/>
                        <Icon corner name='add' color='teal' />
                    </Icon.Group>
                    <Card.Header className="leftpadding">Add New Movie</Card.Header>
                </Card.Content>
            </Card>
        );
    }
}

export default AddNewTile;