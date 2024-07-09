import React from "react";
import './menu1.css'

const Menu_1 : React.FC = () => {
    return (
        <>
        <div className="header">
        <h3>
            Explore Our Work
        </h3>
        <p>
        At Omegup, we take pride in the work we do for our clients. Our dedicated team of talented web developers 
        has created innovative solutions for a wide range of businesses. Here's an overview of some of our recent references:
        </p>
        </div>
        <div className="containerPere">
        <div className="container1-1">
            <img src="img1.png" alt="bonjour" id="img2" />
            <div className="sansimage">
            <h3 id="titre1-1">Atéliers - 77</h3>
            <p id="text1-1">Technologies Utilisées :</p>
            <div className="container2-1">
                <span className="container2-2">HTML5</span>
                <span className="container2-2">CSS3</span>
                <span className="container2-2">React</span>
                <span className="container2-2">NodeJS</span>
                <span className="container2-2">Tailwind</span>
            </div>
            <p>We have developed a stylish and functional website for Atelier-77 to showcase their expertise in 
                signage and digital printing. The website provides an intuitive user experience and highlights their 
                impressive portfolio of projects.</p>
            <div id="buttonbis">View case studies</div>
            
            <a id="button2bis" href="#" target="_blank">More case studies</a>
            <div>
                <div id="flècheDr"><div className="droite"></div></div>
                <div id="flècheGh"><div className="gauche"></div></div>
            </div>
            </div>
        </div>
        </div>



        </>
    )
}

export default Menu_1