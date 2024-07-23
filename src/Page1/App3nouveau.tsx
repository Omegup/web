import React from 'react'
import './head.css'
import { useState } from 'react'


const Head : React.FC = () => {
    const [panel,setPanel] = useState('panel1')

    const Handleclick = (panel:any) => {
        setPanel(panel);
    }


    return (
        <>
        <div className='container5'>
            
            <p className='text2head'>What shapes our identity !</p>
            <h4 className='titrebishead'>Our objectives have remained unwavering</h4>
            <p className='texte3head'>Imagine, explore, delve into particulars, chase the next wild adventure, forever <br/>
             absorb wisdom, and leave an indelible mark on the world !</p>
        </div>
        <div className='container6'>
            
            <div className="buttons-container">
            <button className={`button1 ${panel === 'panel1' ? 'expanded' : ''}`}onClick={() => Handleclick('panel1')}>
                <div className='imganim1head'>
                <div className='numerogh'>01</div><div className='textgauche'>Our Mission</div>
                <div className={`textanim1 ${panel === 'panel1' ? 'expanded' : 'retracted'}`}><h3 style={{color: "#FC7557"}}>🚀 Unleashing Digital Dreams 🌟</h3>
                <h3>Eradicate regrets. Fuel ambitions. Ignite dreams.</h3><p>At Omegup, our mission is to turn your digital dreams into extraordinary realities.
                     We're not just developers; we're dreamweavers, crafting digital marvels that defy expectations.</p></div>
                </div>
            </button>
            
            <button className={`button2 ${panel === 'panel2' ? 'expanded' : ''}`}onClick={() => Handleclick('panel2')}>


                <div className='numerogh'>02</div><div className='textgauche'>Our Vision</div>
                <div className={`textanim1 ${panel === 'panel2' ? 'expanded' : 'retracted'}`}><h3 style={{color: "#949CFF"}}>🌐 Pioneering the Digital Frontier 🚀</h3>
                <h3>A world where ambition knows no bounds.</h3><p>Our vision is to lead the charge in redefining the digital landscape. We envision a world where innovation knows no bounds, 
                    where every pixel tells a story, and where your online presence is nothing short of legendary.</p></div>
                
                

            </button>

            <button className={`button3 ${panel === 'panel3' ? 'expanded' : ''}`}onClick={() => Handleclick('panel3')}>
            <div className='numerogh'>03</div><div className='textgauche'>Our Vibe</div>
            <div className={`textanim1 ${panel === 'panel3' ? 'expanded' : 'retracted'}`}><h3 style={{color: "#84C67E"}}>🎨 Where Creativity Meets Code 🤝</h3>
                <h3>A world where ambition knows no bounds.</h3><p>Our vibe is a fusion of artistry and technology. We're a creative powerhouse where 
                    collaboration fuels innovation, where every idea has the potential to reshape the digital universe.</p></div>
                

            </button>
            <button className={`button4 ${panel === 'panel4' ? 'expanded' : ''}`}onClick={() => Handleclick('panel4')}>
            <div className='numerogh'>04 </div><div className='textgauche'>Our Ambition</div>
            <div className={`textanim1 ${panel === 'panel4' ? 'expanded' : 'retracted'}`}><h3 style={{color: "#FEC63A"}}>🌟 Elevate, Innovate, Impact 🚀</h3>
                <h3>Pioneer excellence. Set benchmarks.</h3><p>Our ambition knows no limits. We aspire to elevate your brand, innovate without compromise, 
                    and leave a lasting impact on the digital world. Together, we'll conquer the impossible.</p></div>
                

            </button>
            </div>
        </div>

    
        </>
    )
}




export default Head