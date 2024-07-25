import React from "react";
import './intro.css'



const Intro : React.FC =() => {
    return (
        <>
            <div className="intro1">
                <h3>Project Showcase</h3>
                <p>At Omegup, we take pride in our web solutions. 
                    Explore our featured projects to see the results of our collaboration with clients who entrusted us with their web development needs.</p>
            </div>
            <div className="GrosTableau">
                <div className="MiniTablea"></div>
                <div className="MiniTablea"></div>
                <div className="MiniTablea"></div>
            </div>
        </>
    )
}

export default Intro;