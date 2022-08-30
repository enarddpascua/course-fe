import React from "react";
import './ContentCard.css';

const ContentBar = ({title}) => {
    return(
        <div id='contentCard-wrapper'>
            <span className="title">{title}</span>
            <div className="topic-logo">
               Content
            </div>
        </div>
    )
}

    export default ContentBar;