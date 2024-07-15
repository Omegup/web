import { useState } from "react";

import React from "react";
import './menu1.css'

const Menu_1 : React.FC = () => {
    const [tableau,setTableau] = useState('tableau1');

    const PivotDroit = (tableau:any) => {
        setTableau(tableau);
    }

    const PivotGauche =(tableau:any) => {
        setTableau(tableau);
    }


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
        <div className={`container1-1 ${tableau === 'tableau1' ? 'affiché' : 'masqué'}`}>
            <img src="src/assets/img1.png" alt="bonjour" className="img2" />
            <div className="sansimage">
            <h3 className="titre1-1menu">Atéliers - 77</h3>
            <p className="text1-1menu">Technologies Utilisées :</p>
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
            <div className="buttonbismenu">View case studies</div>
            
            <a className="button2bismenu" href="#" target="_blank">More case studies</a>
            
            
                <div className="flècheDrMenu" onClick={() => PivotDroit('tableau2')}><div className="droite"></div></div>
                <div className="flècheGhMenu" onClick={() => PivotGauche('tableau3')}><div className="gauche"></div></div>
            
            </div>
        </div>

        <div className={`container1-2 ${tableau === 'tableau2' ? 'affiché' : 'masqué'}`}>
        
            <img src="src/assets/pc2.png" alt="bonjour" className="img2" />
            <div className="sansimage">
            <h3 className="titre1-1menu">School Online Tn</h3>
            <p className="text1-1menu">Technologies Utilisées :</p>
            <div className="container2-1">
                <span className="container2-2">React</span>
                <span className="container2-2">NextJS</span>
                <span className="container2-2">NodeJS</span>
                <span className="container2-2">MongoDB</span>
            </div>
            <p>Solution School is the comprehensive answer to the management needs of private schools. Our platform provides a suite of robust 
                tools and features that enable educational institutions to efficiently manage all aspects of their operations.</p>
            <div className="buttonbis22menu">View case studies</div>
            
            <a className="button2bismenu" href="#" target="_blank">More case studies</a>
            
            
                <div className="flècheDrMenu" onClick={() => PivotDroit('tableau3')}><div className="droite"></div></div>
                <div className="flècheGhMenu" onClick={() => PivotGauche('tableau1')}><div className="gauche"></div></div>
            
            </div>
        </div>

        <div className={`container1-3 ${tableau === 'tableau3' ? 'affiché' : 'masqué'}`}>
            <img src="src/assets/pc3.png" alt="bonjour" className="img2" />
            <div className="sansimage">
            <h3 className="titre1-1menu">DSF Fr</h3>
            <p className="text1-1menu">Technologies Utilisées :</p>
            <div className="container2-1">
                <span className="container2-2">React</span>
                <span className="container2-2">NodeJS</span>
                <span className="container2-2">NodeJS</span>
            </div>
            <p>DSF Déménagement Services France is your trusted partner for all your moving needs in France. 
                With many years of experience, we provide tailor-made moving solutions for businesses and individuals.</p>
            <div className="buttonbis33menu">View case studies</div>
            
            <a className="button2bismenu" href="#" target="_blank">More case studies</a>
            
            
                <div className="flècheDrMenu" onClick={() => PivotDroit('tableau1')}><div className="droite"></div></div>
                <div className="flècheGhMenu" onClick={() => PivotGauche('tableau2')}><div className="gauche"></div></div>
            
            </div>
        </div>
        </div>



        </>
    )
}

export default Menu_1