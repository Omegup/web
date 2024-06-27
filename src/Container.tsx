import React from 'react';
import Card from './Card';
import './Container.css';

const Container: React.FC = () =>{
  return(
    <div className='contenu'>
      <Card 
        imagesrc=<img className='image-card'src="light.png" alt="light" />
        title= 'Innovate & Create :' 
        description='Our team of tech visionaries thrives on innovation ,  crafting cutting-edge websites that lead the way in your 
            industry .
             '/>
      <Card 
        imagesrc=<img className='image-card'src="agree.png" alt="agree" />
        title='Partners in Success:'
        description='Your success is our mission .We collaborate closely 
         with you, ensuring our solutions align perfectly with your goals           . '/> 
      <Card 
        imagesrc=<img className='image-card'src='rocket.png' alt='rocket' />
        title='Code that Performs:' 
        description='Behind every stunning website and mobile app lies impeccable code. We enginner seamless experiences that set you             apart. '/>
      <Card  
        imagesrc=<img className='image-card'src='paint.png' alt='paint' />
        title='Design Brilliance ' 
        description='Our UX/UI designs aren`t just visually stunning; 
        they`re usercentric masterpieces that captivate your audience. '/>
    </div>
    
  );
};
export default Container;