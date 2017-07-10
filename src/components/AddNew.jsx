import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import  './AddNew.css';


export default class AddNew extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
    }

    render() { 
        return (
            <div className="floatbottomright">
<<<<<<< HEAD
                <Button circular color='teal' icon='plus' />
=======
                <Button
                    circular
                    color='teal'
                    icon='plus'
                    onClick={this.props.onClick}
                    />
>>>>>>> 92db78f84f2c001768e273c7e862d21fffb96efe
            </div>
        );
    }
}