
import React from 'react';
import './Card.css';

interface CardProps {
  title : string;
  description: string;
  imagesrc: JSX.Element;
}

const Card: React.FC<CardProps> = ({title,description,imagesrc}) =>{
  return(
    <div className='card'>
      <h2 id='h2'>{imagesrc} {title}</h2>
      <p id='description'>{description}</p>
    </div>
  );
};
export default Card;