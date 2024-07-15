import './footer.css'
import React from 'react'

interface IconeProps {
    images : JSX.Element

}

/*const Icone : React.FC<IconeProps> = [{images}] => {
    return (
        <div>
            ima
        </div>
    )

}*/

const Footer : React.FC = () => {
    return (
        <>
            
            <div className="containfooter">
                <div className='maincontain'>
                    <h3 className='titlefooter'>Technologies We Excel In</h3>
                    <p className='textefooter'>At Omegup, we harness the power of cutting-edge technologies to drive digital innovation and deliver exceptional results. 
                        Our expertise spans a wide 
                    range of technologies, including:</p> <br/>

                    <div className="slide">

                            <div className='slide1'><img src='src/assets/footer1.svg' alt='' className='imgfooter'></img></div>
                            <div className='slide1'><img src='src/assets/Group 25.svg' alt='' className='imgfooter'></img></div>
                            <div className='slide1'><img src='src/assets/Group 26.svg' alt='' className='imgfooter'></img></div>
                            <div className='slide1'><img src='src/assets/Group 44.svg' alt='' className='imgfooter'></img></div>                            
                            <div className='slide1'><img src='src/assets/Group 50.svg' alt='' className='imgfooter'></img></div>
                            <div className='slide1'><img src='src/assets/Group 61.svg' alt='' className='imgfooter'></img></div>
                            <div className='slide1'><img src='src/assets/Group 62.svg' alt='' className='imgfooter'></img></div>       
                            <div className='slide1'><img src='src/assets/Group 65.svg' alt='' className='imgfooter'></img></div>
                            <div className='slide1'><img src='src/assets/Group 70.svg' alt='' className='imgfooter'></img></div>
                            <div className='slide1'><img src='src/assets/Group 76.svg' alt='' className='imgfooter'></img></div>                            
                            <div className='slide1'><img src='src/assets/Group 78.svg' alt='' className='imgfooter'></img></div>
                            <div className='slide1'><img src='src/assets/Group 79.svg' alt='' className='imgfooter'></img></div>
                            <div className='slide1'><img src='src/assets/Group 84.svg' alt='' className='imgfooter'></img></div>                     

                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer