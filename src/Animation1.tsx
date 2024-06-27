import React from "react";
import './Animation1.css';

interface LangProps{
    images:string[];
}
const Animation1 : React.FC <LangProps> =({images})=>{
    return(
        <div className="anmt">
            {images.map((images,index) => (
                <img key={index} src={images} alt="images" className="img-lang"/>
            ))}

        </div>
    );
};
export default Animation1;