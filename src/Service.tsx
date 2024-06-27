import React from "react";
import Servicecard from "./Servicecard";
import './Servicecard.css';

const Service : React.FC = () => {
    return(
        
        <>
            <Servicecard
                imagesrc1=<img className="image-serv" src="webdev2.png" alt="webdev"/>
                title1='Web Development.'
                description1='🌐 Website Design & Development: Craft websites that leave a lasting impression and drive results. 🚀 Web App Development: Build dynamic and powerful web applications to meet your unique needs.
                            📱 Responsive Design: Ensure your web presence is seamless across all devices.'/>
            <Servicecard 
                imagesrc1=<img className="image-serv" src="UxUi.png" alt="uxuidesign"/>
                title1='UX/UI Design'
                description1=' 🎨 User-Centric Design: We create intuitive and visually stunning user interfaces that captivate and engage.
                            🔍 User Research: Uncover insights to inform design decisions and enhance user experiences.
                            🚀 Prototyping & Testing: Refine designs through iterative prototyping and user testing.'/>
            <Servicecard 
                imagesrc1=<img className="image-serv " src="mobile.png" alt="mobiledev" />
                title1='Mobile Development'
                description1='📱 iOS & Android Apps: Develop mobile apps that shine on every platform and provide exceptional user experiences.
                             💡 Mobile Strategy: Create strategies to conquer the mobile market and reach your audience effectively.
                              🚀 App Optimization: Enhance app performance.' />     


        
        
        
         </>
        
    );
};
export default Service ;