import React from 'react';
import './NavButton.css';
import {Link} from 'react-router-dom';

const NavButton = ({title, url}) => {
    return (
        <Link className='navbutton' to={url}>
            {title}
        </Link>
    )
}

export default NavButton;