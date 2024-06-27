import React from "react";
import './Servicecard.css';

interface ServiceProps{
    imagesrc1: JSX.Element;
    title1 : string;
    description1: string;
}
const Service :React.FC<ServiceProps> = ({title1,description1,imagesrc1}) =>{
    return(
      <div className='contenu2'>
      <div className='Serv'>
         <span id="spimage"> {imagesrc1} </span>
         <h2 id="h2"> {title1}</h2>
        <p id='description2'>{description1}</p>
      </div>
      </div>
    );
  };
  export default Service;