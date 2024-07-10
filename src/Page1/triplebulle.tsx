import React from "react";
import './triplebulle.css'


const TripleBulle : React.FC = () => {
    return(
        <>
        <div className="container3-1">
            <h3>What Our Clients Say</h3>
            <p>Discover why our clients trust us. Read what they have to say about our services, solutions, and dedication to 
                their success. We take pride in their feedback and look forward to serving you with the same level of excellence.</p>
        </div>
        <div className="Bulle1-1">
            <div className="containerbulle">
            <div id="bulle1-2"><p className="textbulle">Working with Omegup was a game-changer for our business. Their web development 
                expertise transformed our online presence, making it not only visually stunning but also incredibly user-friendly.</p></div>
                <div id="rond1-1"></div>
                <div id="rond2-2"></div>
            </div>
            <div className="containerbulle">
            <div id="bulle1-3"><p className="textbulle">Chez Omegup, we found a team that not only takes pride in their work but also delivers
             outstanding results. Their innovative solutions and dedication to our project exceeded our expectations.</p></div>
             <div id="rond1-2"></div>
             <div id="rond2-3"></div>
             </div>
             <div className="containerbulle">
            <div id="bulle1-4"><p className="textbulle">Omegup has been a valuable partner in our online journey. Their web development skills have helped 
                us reach new heights. They designed a website that not only looks fantastic but also performs seamlessly.</p></div>
                <div id="rond1-3"></div>
                <div id="rond2-4"></div>
                </div>
        </div>
        
        </>
    )
}

export default TripleBulle