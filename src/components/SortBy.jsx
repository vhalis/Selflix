import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
    {key: 1, text:'Title'},
    {key: 2, text:'Genre'},
    {key: 3, text:'Release Date'}
];

class SortBy extends React.Component {

    render() { 
        return (
        <Menu color='teal' compact>
            <Dropdown text='Sort by...' options={options} simple item />
            <Menu.Item icon='sort alphabet ascending' />
            <Menu.Item icon='sort alphabet descending' />
        </Menu>
        );
    }

}

export default SortBy;