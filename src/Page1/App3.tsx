import React from 'react'
import './head.css'
import { useState } from 'react'


function Animion() {
    const [width, setWidth] = useState(<div className='container6'><span id='texteimage1'>
    🚀 Unleashing Digital Dreams 🌟
        
    </span></div>)

    const onClick =() => {
        setWidth(<div className="container7"><span id='texteimage2'>
        🚀 Unleashing Digital Dreams 🌟
            
        </span></div>
        
        )
        return 
    }
    return {width}
}


const Head : React.FC = () => {
    return (
        <>
        <div className='container5'>
            
            <p id='text2'>What shapes our identity !</p>
            <h4 id='titrebis'>Our objectives have remained unwavering</h4>
            <p id='texte3'>Imagine, explore, delve into particulars, chase the next wild adventure, forever <br/>
             absorb wisdom, and leave an indelible mark on the world !</p>
        </div>
        <div className='container6'><span id='texteimage1'>
    🚀 Unleashing Digital Dreams 🌟
        
    </span></div>

    
        </>
    )
}

export default Head