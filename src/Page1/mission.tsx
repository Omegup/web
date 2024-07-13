import { useState } from "react";
import './mission.css'


function Animation () {
    const [activeCard, setActiveCard] = useState();

    const HandleClick = (card:any) => {
        setActiveCard(card);
    }
    return(
        <div className="containeranim">
            
        </div>
    )

}

