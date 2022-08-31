import React from 'react';
import './NavButton.css';
import {NavLink} from 'react-router-dom';

const NavButton = ({title, url}) => {
    return (
        <div id='navbutton-wrapper'>
            <NavLink className={({isActive}) => isActive ? 'navbutton-active' : 'navbutton' } to={url}>
                {title}
            </NavLink>
        </div>
    )
}

export default NavButton;