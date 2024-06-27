/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
//import React from 'react';
/*import Animation1 from './Animation1';*/
import './App.css'
import Container from './Container';
import Language from './Language';
import Service from './Service';
function App() {
    return (
      <div>
          <div className='Navbar'>
            <ul className='ul1'>
              <li id='nav'>Omegup</li>
              <li className='nav1'> Home</li>
              <li className='nav1'>About Us</li>
              <li className='nav1'>services</li>
              <li className='nav1'>References</li>
              <a id='nav2'>Get in touch</a>
            </ul>
          </div>
          <div className='welcome'>
            <h1 className='text'> <span id='sp'>Welcome to <b>Omegup  </b> : </span> <br/>
            Where <span id='sp1'>Imagination </span> Meets <span id='sp2'>Code</span> &lt;<span> / </span>&gt; </h1>
          </div>
          <div className='Cards'>
              <Container />
          <p id='p2'>At Omegup, we are the architects of your digital dreams. We blend creativity,technology 
            and expertise to diliver awe-inspiring web solutions that redefine the online landscape <br/>
            <span id='sp3'><button id='button1'> Get in touch</button> <button id='button2'>Explore Our Services </button></span>    </p>
          </div>
          < div className='container2'>
              <p id='p3'> <span id='sp4'> What shapes our identity! </span> <br/> <br/> 
                  <span id='sp5'> Our objectives have remained unwavering <br/> <br/> </span>
                  <span id='sp6'> imagine,explore, delve into particulars,chase the next wild adventure,forever <br/>
                  absorb wisdom, and leave an indelible mark on the world !</span>
              </p>
          </div>
          <div className='container3'>
          </div>
          <p id='p4'> <span id='sp7'>Our services </span> <br/> <br/>
            At Omegup, we specialize in crafting exceptional digital experiences. Our core services include:
            </p>
          <div className='container4'>
            <Service/>
          </div>
          <div className='container5'>
            <p id='p5'> Technologies We Excel In <br/><br/>
                    <a>At Omegup, we harness the power of cutting-edge technologies to drive digital innovation 
                    and deliver exceptional results. Our expertise spans a wide range of technologies, including :</a>   
            </p>
            <Language />
          </div>
      </div>
    );
  }

export default App
