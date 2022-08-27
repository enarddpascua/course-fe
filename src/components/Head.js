import React from 'react';
import './Head.css';

const Head = ({children}) => {
    return (
        <div id='head-wrapper'>
            {children}
        </div>
    );
}

export default Head;