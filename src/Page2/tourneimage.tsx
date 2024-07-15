import React from "react";
import { useState } from "react";



const TourneImage : React.FC  = () => {
    const [positions, setPositions] = useState(['left','center','right']);


    const tourneDroite =() => {
    setPositions(prev => [prev[2], prev[0], prev[1]]);


    }

    const tourneGauche =() => {
        setPositions(prev=> [prev[1], prev[2], prev[0]]);
    }

    return (
        <>
        <div className="containerflèche1-1">
                <button onClick={tourneDroite} id="flèchedroite"></button>
                <button onClick={tourneGauche} id="flèchegauche"></button>
             </div>
        </>
    )

}

export default TourneImage;