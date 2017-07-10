import React from 'react';
import { Input, Dropdown } from 'semantic-ui-react';


const options = [
    { key: 'title', text: 'by Title', value: 'title' },
    { key: 'genre', text: 'by Genre', value: 'genre' },
    { key: 'actor', text: 'by Actor', value: 'actor' },
];

class SearchForm extends React.Component {

    render() { 
        return (
            <Input
                action={<Dropdown button basic floating options={options} defaultValue='title' />}
                icon='search'
                iconPosition='left'
                placeholder='Search...'
                fluid
            />
        );
    }

}

export default SearchForm;