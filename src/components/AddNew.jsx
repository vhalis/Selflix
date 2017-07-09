import React, { Component } from 'react';
import { Icon, Button, Card } from 'semantic-ui-react';

class AddNew extends Component {

    constructor(props) {
        super(props);
        // Do something with a callback to create new?
    }

    render() { 
        return (
        <div>
            <Button icon="plus" />
            <Card>Lorem ipsum</Card>
        </div>
        );
    }
}

export default AddNew;