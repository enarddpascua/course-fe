import React from "react";
import './styles.css';

const About = () => {
    return(
        <div id="parent">
            <div className="content">
            
                <div className="about-description">
                    <h1>ICT723</h1>
                    <h2>Assessment 2</h2>
                    <div className="technologies-wrapper">
                    <h5>Technologies used: </h5>
                        <img alt="logo" src="https://res.cloudinary.com/dzcu4deig/image/upload/v1661841466/course/thumbnails/React-icon.svg_c2vp8x.png"/>
                        <img alt="logo" src="https://res.cloudinary.com/dzcu4deig/image/upload/v1661841468/course/thumbnails/spring_d6vwvu.png"/>                
                        <img alt="logo" src="https://res.cloudinary.com/dzcu4deig/image/upload/v1661841467/course/thumbnails/postgres_uxxmkq.png"/>
                        <img alt="logo" src="https://res.cloudinary.com/dzcu4deig/image/upload/v1661842935/course/thumbnails/heroku_so5s06.png"/>
                        <img alt="logo" src="https://res.cloudinary.com/dzcu4deig/image/upload/v1661842927/course/thumbnails/postman_xidg18.png"/>
                        <img alt="logo" src="https://res.cloudinary.com/dzcu4deig/image/upload/v1661841470/course/thumbnails/aws-logo_tateew.png"/>          
                    </div>

                    <p>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;