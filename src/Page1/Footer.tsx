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
                    <h3 id='titlefooter'>Technologies We Excel In</h3>
                    <p id='textefooter'>At Omegup, we harness the power of cutting-edge technologies to drive digital innovation and deliver exceptional results. 
                        Our expertise spans a wide 
                    range of technologies, including:</p> <br/>

                    <div className="slide">

                            <div id="slide1"></div>
                            <div id="slide2"></div>
                            <div id="slide3"></div>
                            <div id="slide4"></div>
                            <div id="slide5"></div>

                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer