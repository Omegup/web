import React from "react";
import './footer2.css';

const Footer2 : React.FC =() => {
    return (
        <>
        <div className="containerfooter2">
        <div className="textfooter2">
            <h2 id="titrefooter2">Omegup</h2>
            <p id="textfooter1-1">Stay connected and follow 
                Omegup on social media platforms for daily updates, tips, and inspiration related to web development. Let's engage!</p>
                <img src="src/Frame 249.png"></img> 
        </div>
        <div className="container2footer2">
            <div>
                <h2>Quick Links</h2>
                <p className="textcontainer2footer2">Home</p>
                <p className="textcontainer2footer2">About Us</p>
                <p className="textcontainer2footer2">Services</p>
                <p className="textcontainer2footer2">Get in touch</p>
            </div>
            <div>
                <h2>Services</h2>
                <p className="textcontainer2footer2">UX/UI Design</p>
                <p className="textcontainer2footer2">Web development</p>
                <p className="textcontainer2footer2">Mobile development</p>
            </div>
            <div>
                <h2>Contact</h2>
                <p className="textcontainer2footer2"><img src="src/map.png"></img> 10, Cyber Park Zarzis, Medenine</p>
                <p className="textcontainer2footer2"><img src="src/sms-tracking.png"></img> contact@omegup.tn</p>
                <p className="textcontainer2footer2"><img src="src/call-incoming.png"></img> +216 28 827 941</p>
            </div>
        </div>
        <div className="containerfooter2-1">
        <p id="footertext2">Copyright Notice: © 2023 Omegup. All rights reserved. </p>
        </div>
        </div>
        
        
        </>
    )
}

export default Footer2;