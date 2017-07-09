import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';

import  './AddNew.css';

class AddNew extends Component {
    // This class should be a floating "add new movie" button
    // in the right bottom corner of screen

    constructor(props) {
        super(props);
        // Do something with a callback to create new?
    }

    render() { 
        return (
        <div className="float">
            <Button circular color='teal' icon='plus' />
        </div>
        );
    }
}

export default AddNew;