import React from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown } from 'semantic-ui-react';


const options = [
    { key: 'title', text: 'by Title', value: 'title' },
    { key: 'genre', text: 'by Genre', value: 'genre' },
    { key: 'actor', text: 'by Actor', value: 'actor' },
];

export default class SearchForm extends React.Component {

    static propTypes = {
        onSearchFieldChange: PropTypes.func.isRequired,
        onSearchTextChange: PropTypes.func.isRequired,
    }

    state = {
        searchField: 'title',
        searchText: '',
    }

    onSearchFieldChange = (e, { value }) => {
        this.setState({searchField: value});
        this.props.onSearchFieldChange(value);
    }

    onSearchTextChange = (e, { value }) => {
        this.setState({searchText: value});
        this.props.onSearchTextChange(value);
    }

    render() { 
        const { searchField, searchText } = this.state;
        const actionDropdown = (
            <Dropdown
                button basic floating
                options={options}
                onChange={this.onSearchFieldChange}
                value={searchField} />
        );

        return (
            <Input
                fluid
                action={actionDropdown}
                icon='search'
                iconPosition='left'
                onChange={this.onSearchTextChange}
                placeholder='Search...'
                value={searchText} />
        );
    }
}