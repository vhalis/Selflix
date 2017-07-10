import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import './SortBy.css';

class SortBy extends React.Component {

    state = { 
        activeType: 'title',
        activeOrder: 'ascending',
    }

    handleTypeClick = (e, { name }) => this.setState({ activeType: name })
    handleOrderClick = (e, { name }) => this.setState({ activeOrder: name })

    render() { 
        const { activeType, activeOrder } = this.state;

        return (
            <div className="sortmenu">
                <Menu color='teal' fluid>
                    <Menu.Item header>SORT BY</Menu.Item>
                    <Menu.Item name='title' active={activeType === 'title'} onClick={this.handleTypeClick} />
                    <Menu.Item name='genre' active={activeType === 'genre'} onClick={this.handleTypeClick} />
                    <Menu.Item name='releaseDate' active={activeType === 'releaseDate'} onClick={this.handleTypeClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item name='ascending' active={activeOrder === 'ascending'} onClick={this.handleOrderClick}>
                            <Icon name='sort alphabet ascending' />
                        </Menu.Item>
                        <Menu.Item name='descending' active={activeOrder === 'descending'} onClick={this.handleOrderClick}>
                            <Icon name='sort alphabet descending' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }

}

export default SortBy;