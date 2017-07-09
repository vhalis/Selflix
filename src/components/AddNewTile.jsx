import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Icon } from 'semantic-ui-react';


class AddNewTile extends React.Component {
    render () {
        return (
            <Card raised>
                <Container textAlign='center'>
                    <Icon name='plus' size='massive' />
                </Container>
                <Card.Content textAlign='center'>
                    <Card.Header>
                        <Container textAlign='center'>
                            {"Add a new movie"}
                        </Container>
                    </Card.Header>
                </Card.Content>
            </Card>
        );
    }
}

export default AddNewTile;