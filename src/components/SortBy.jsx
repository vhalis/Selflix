import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';

import './SortBy.css';


export default class SortBy extends React.Component {

    static propTypes = {
        activeOrder: PropTypes.oneOf(['ascending', 'descending']),
        activeType: PropTypes.oneOf(['title', 'genre', 'releaseDate']),

        onChangeOrderBy: PropTypes.func.isRequired,
        onChangeSortType: PropTypes.func.isRequired,
    }

    static defaultProps = {
        activeOrder: 'ascending',
        activeType: 'title',
    }

    handleOrderClick = (e, { name }) => {
        this.props.onChangeOrderBy(name);
    }

    handleTypeClick = (e, { name }) => {
        this.props.onChangeSortType(name);
    }

    render() { 
        const { activeOrder, activeType } = this.props;

        return (
            <div className="sortmenu">
                <Menu color='teal' fluid>
                    <Menu.Item header>SORT BY</Menu.Item>
                    <Menu.Item
                        name='title'
                        active={activeType === 'title'}
                        onClick={this.handleTypeClick} />
                    <Menu.Item
                        name='genre'
                        active={activeType === 'genre'}
                        onClick={this.handleTypeClick} />
                    <Menu.Item
                        name='releaseDate'
                        active={activeType === 'releaseDate'}
                        onClick={this.handleTypeClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='ascending'
                            active={activeOrder === 'ascending'}
                            onClick={this.handleOrderClick}
                            >
                            <Icon name='sort alphabet ascending' />
                        </Menu.Item>
                        <Menu.Item
                            name='descending'
                            active={activeOrder === 'descending'}
                            onClick={this.handleOrderClick}
                            >
                            <Icon name='sort alphabet descending' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }

}