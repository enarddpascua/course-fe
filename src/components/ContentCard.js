import React from "react";
import './ContentCard.css';

const ContentBar = ({title, image}) => {
    return(
        <div id='contentCard-wrapper'>
            <span className="title">{title}</span>
            <div className="topic-logo">
             <img src={image} alt="logo"/>
            </div>
        </div>
    )
}

    export default ContentBar;