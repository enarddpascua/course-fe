import React from 'react';
import './Content.css';

const Content = ({children}) => {
    return (
        <div id='content-wrapper'>
            {children}
        </div>
    );
}

export default Content;