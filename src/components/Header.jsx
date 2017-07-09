import React from 'react';
import  './Header.css';

class Header extends React.Component {
    // This class should be a floating title bar
    // Maybe it should also have a dropdown

    render() {
        return (
            <div className='header'>
                <div className='headertext'>Selflix</div>
                <div className='sortmenu'></div>
            </div>
        );
    }
}

export default Header;