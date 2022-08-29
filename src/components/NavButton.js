import React from 'react';
import './NavButton.css';
import {Link} from 'react-router-dom';

const NavButton = ({title, url}) => {
    return (
        <div id='navbutton-wrapper'>
            <Link className='navbutton' to={url}>
                {title}
            </Link>
        </div>
    )
}

export default NavButton;