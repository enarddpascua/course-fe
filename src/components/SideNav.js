import React from 'react';
import './SideNav.css';

const SideNav = ({children}) => {
    return (
        <div id='navigation-wrapper'>
            <div className='logo-wrapper'>
                <img src='https://res.cloudinary.com/dzcu4deig/image/upload/v1661388736/course/Mediamodifier-Design_uyztwc.svg' alt='logo goes here'/>
            </div>
            <div className='buttons-wrapper'>{children}</div>
        </div>
    );
}

export default SideNav;