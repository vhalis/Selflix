import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import  './AddNewButton.css';


export default class AddNewButton extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
    }

    render() { 
        return (
            <div className="floatbottomright">
                <Button
                    circular
                    color='teal'
                    icon='plus'
                    size='huge'
                    onClick={this.props.onClick}
                    />
            </div>
        );
    }
}