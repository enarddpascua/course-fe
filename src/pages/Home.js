import React from "react";
import './styles.css';

const Home = () => {
    return(
        <div id="parent">
            <div className="content">
                <div className="home-wrapper">
                    <h1>Random online courses</h1>
                </div>
            </div>
            <ul className="box-area">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Home;