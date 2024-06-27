import React from "react";
import Animation1 from "./Animation1";
import './Language.css'

import image1 from './assets/Youssef Logos/Group 21.svg';
import image2 from './assets/Youssef Logos/Group 25.svg';
import image3 from './assets/Youssef Logos/Group 26.svg';
import image4 from './assets/Youssef Logos/Group 44.svg';
import image5 from './assets/Youssef Logos/Group 50.svg';
import image6 from './assets/Youssef Logos/Group 57.svg';
import image7 from './assets/Youssef Logos/Group 61.svg';
import image8 from './assets/Youssef Logos/Group 62.svg';
import image9 from './assets/Youssef Logos/Group 65.svg';
import image10 from './assets/Youssef Logos/Group 70.svg';
import image11 from './assets/Youssef Logos/Group 76.svg';
import image12 from './assets/Youssef Logos/Group 78.svg';
import image13 from './assets/Youssef Logos/Group 79.svg';
import image14 from './assets/Youssef Logos/Group 84.svg';
const images=[
    image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14
];
const Language :React.FC =() => {
    return(
        <div className="L1">
            <Animation1 images={images}/>
        </div>
    );
};
export default Language;
