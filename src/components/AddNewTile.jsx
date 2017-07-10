import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import { Card, Icon, Container } from 'semantic-ui-react';
=======
import { Card, Icon } from 'semantic-ui-react';
>>>>>>> 92db78f84f2c001768e273c7e862d21fffb96efe

import  './AddNewTile.css';


export default class AddNewTile extends React.Component {
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