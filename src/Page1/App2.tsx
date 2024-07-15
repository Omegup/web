import React from 'react'
import './Affiche.css'


const Acceuil : React.FC = () => {
    return(
    <div className='container4'>
    <div className='container2'>
        <span className='box1'><h3>💡 Innovate & <br/>Create :</h3> <p>Our team of tech visionaries <br />thrives on innovation, 
          crafting<br /> cutting-edge websites that lead <br/> the way in your industry.</p> </span>
        
        
        <span className='box2'><h3>🤝 Partners in <br/>Success :</h3> <p>Your succes is our mission. We <br/> 
        collaborate closely with you, <br/>
        ensuring our solutions align <br/>
        perfectly with your goals</p> </span>
        

        <span className='box3'><h3>🚀 Code that <br/>Performs :</h3> <p>Behind every stunning website <br/>
        and mobile app lies impeccable <br/>
        code. We engineer seamless <br/>
        experiences that set you apart.</p> </span>
        

        <span className='box4'><h3>🎨 Design <br/>Brilliance :</h3> <p>Our UX/UI designs aren't just <br/>
        visually stunning: they're user-<br/>
        centric masterpieces that <br/>
        captivate your audience.</p> </span>
      </div>
      
      <p className='text1affiche'>At Omegup, we are the architects of your digital dreams. We blend creativity, technology, and <br/>
      expertise to deliver awe-inspiring web solutions that redefine the online landscape.</p>
      <div className='container3'>
      <span className='button1affiche'>Get in touch</span>
      <span className='button2affiche'>Explore Our Services</span>
      </div>
    </div>



    )
  }


export default Acceuil;