import React from 'react';
import  './Header.css';
import { Dropdown } from 'semantic-ui-react';

import SortBy from './SortBy.jsx';

class Header extends React.Component {
    // This class should be a floating title bar
    // Maybe it should also have a dropdown

    render() {
        return (
            <div className='headerwrapper'>
                <div id='headertext'>SELFLIX</div>
                <div id='sortmenu'><SortBy /></div>
            </div>
        );
    }
}

export default Header;