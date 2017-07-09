import React from 'react';

import  './Header.css';

class Header extends React.Component {
    // This class should be a floating title bar
    // Maybe it should also have a dropdown
    render() {
        return (
            <div className='header'>
                Selflix
            </div>
        );
    }
}

export default Header;