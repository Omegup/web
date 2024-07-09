import React from 'react'
import './App.css'


const NavBar : React.FC = () => {
  return (

    
    <div className='container1'>
      
      <div className='affiche'>
      <span className='nav1'>Omegup</span>
      
      <a href='#' className='nav2'>Home</a>
      <a href='#' className='nav2'>About Us</a>
      <a href='#' className='nav2'>Services</a>
      <a href='#' className='nav2'>References</a>
      <a href='#' id='button'>Get in Touch</a>
    </div>
    <div className='texte'>
      <h1>Welcome to <span id='titre1'>Omegup</span> :<br/>Where <span id='titre2'>Imagination</span> meets <span id='titre3'>Code </span>&lt; / &gt;</h1>
    </div>
    </div>
  )

}




export default NavBar
