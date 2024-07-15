import React from "react";
import './footer2.css';

const Footer2 : React.FC =() => {
    return (
        <>
        <div className="containerfooter2">
        <div className="textfooter2">
            <h2 className="titrefooter2">Omegup</h2>
            <p className="textfooter1-1">Stay connected and follow 
                Omegup on social media platforms for daily updates, tips, and inspiration related to web development. Let's engage!</p>
                <img src="src/assets/Frame 249.png"></img> 
                <div className="lien1footer2"></div>
                <div className="lien1footer3"></div>
                <div className="lien1footer4"></div>
                <div className="lien1footer5"></div>
                <div className="lien1footer6"></div>
        </div>
        <div className="container2footer2">
            <div>
                <h2 style={{color:"#FAF9F6"}}>Quick Links</h2>
                <p className="textcontainer2footer2"><button className="footer2button">Home</button></p>
                
                <p className="textcontainer2footer2"><button className="footer2button">About Us </button></p>
                <p className="textcontainer2footer2"><button className="footer2button">Services</button></p>
                <p className="textcontainer2footer2"><button className="footer2button">Get in touch</button></p>
            </div>
            <div>
                <h2 style={{color:"#FAF9F6"}}>Services</h2>
                <p className="textcontainer2footer2"><button className="footer2button">UX/UI Design</button></p>
                <p className="textcontainer2footer2"><button className="footer2button">Web development</button></p>
                <p className="textcontainer2footer2"><button className="footer2button">Mobile development</button></p>
            </div>
            <div>
                <h2 style={{color:"#FAF9F6"}}>Contact</h2>
                <p className="textcontainer2footer2"><button className="footer2button1"><img src="src/assets/map.png" className="imgfooter2"></img> 10, Cyber Park Zarzis, Medenine</button></p>
                <p className="textcontainer2footer2"><button className="footer2button1"><img className="imgfooter2" src="src/assets/sms-tracking.png"></img> contact@omegup.tn</button></p>
                <p className="textcontainer2footer2"><button className="footer2button1"><img src="src/assets/call-incoming.png" className="imgfooter2"></img> +216 28 827 941</button></p>
            </div>
        </div>
        <div className="containerfooter2-1">
        <p className="footertext2">Copyright Notice: © 2023 Omegup. All rights reserved. </p>
        </div>
        </div>
        
        
        </>
    )
}

export default Footer2;