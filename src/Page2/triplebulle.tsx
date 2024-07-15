import React from "react";
import { useState } from "react";
import './triplebulle.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
</style>




const TourneImage : React.FC  = () => {
    const [positions, setPositions] = useState(['left','center','right']);


    const tourneGauche =() => {
        setPositions(prev => [prev[2], prev[0], prev[1]]);


    }

    const tourneDroite =() => {
        setPositions(prev=> [prev[1], prev[2], prev[0]]);
    }

    return (
        <>
        
        
    







    
        
        
        <div className="container3-1">
            <h3>What Our Clients Say</h3>
            <p>Discover why our clients trust us. Read what they have to say about our services, solutions, and dedication to 
                their success. We take pride in their feedback and look forward to serving you with the same level of excellence.</p>
        </div>
        <div className="Bulle1-1">
            <div className={`containerbulle ${positions[0]}`}>
            <div className="bulle1-2"><p className="textbulle">Working with Omegup was a game-changer for our business. Their web development 
                expertise transformed our online presence, making it not only visually stunning but also incredibly user-friendly.</p></div>
                <div className="rond1-1"></div>
                <div className="rond2-2"></div>
                <div className="rond3-3"><img src="persn1.jpeg" alt="" className="imgbulle"></img></div>
                <div className="textebulle2"><h3>John Smith</h3> <p>Founder of EcomSolutions</p></div>
            </div>
            <div className={`containerbulle ${positions[1]}`}>
            <div className="bulle1-3"><p className="textbulle">Chez Omegup, we found a team that not only takes pride in their work but also delivers
             outstanding results. Their innovative solutions and dedication to our project exceeded our expectations.</p></div>
             <div className="rond1-2"></div>
             <div className="rond2-3"></div>
             <div className="rond3-4"><img src="pers2.jpeg" alt="" className="imgbulle2"></img></div>
             <div className="textebulle2"><h3>John Smith</h3> <p>Founder of EcomSolutions</p></div>
             
             </div>
             
             <div className={`containerbulle ${positions[2]}`}>
            <div className="bulle1-4"><p className="textbulle">Omegup has been a valuable partner in our online journey. Their web development skills have helped 
                us reach new heights. They designed a website that not only looks fantastic but also performs seamlessly.</p></div>
                <div className="rond1-3"></div>
                <div className="rond2-4"></div>
                <div className="rond3-5"><img src="pers2.jpeg" alt="" className="imgbulle2"></img></div>
                <div className="textebulle2"><h3>John Smith</h3> <p>Founder of EcomSolutions</p></div>
                </div>

                 
        </div>
        <div className="containerflèche1-1">
                <button onClick={tourneDroite} className="flèchedroitetriplebulle"></button>
                <button onClick={tourneGauche} className="flèchegauchetriplebulle"></button>
             </div> 
        
        </>
    )
}

export default TourneImage;