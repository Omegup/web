'use client'

import { useState } from 'react';
import styled, { css } from 'styled-components';

const Container5 = styled.div`
    padding: 10px;
    gap: 10px;
    margin-left: 107px;
`;

const Text2Head = styled.p`
    margin-top: 50px;
    font-size: 18px;
    color: #FC7557;
`;

const TitreBisHead = styled.h4`
    font-size: 28px;
    font-weight: bold;
`;

const Texte3Head = styled.p`
    font-size: 19px;
    margin-bottom: 20px;
`;

const Container6 = styled.div`
    display: flex;
    height: 70vh;
    width: 90%;
    margin: auto;
    border-radius: 22px;
    @media (max-width: 800px) {
        height :90vh;
        margin-bottom: 20px;
    }  
`;

const ButtonsContainer = styled.div`
    display: flex;
    border-radius: 22px;
    flex: 5;
    @media (max-width: 800px) {
        flex-direction: column;
        height: 85vh;
    }    
    
`;

const Button = styled.button<{expanded:boolean}>`
    

    ${({ expanded }) => expanded ? css`
        flex:5;
        transition: flex 0.6s ease-in-out;
    ` : css`
        flex: 0.5;
    `}
    border: 1px solid #e0e0e0;
    transition: flex 0.8s ease-in-out;
    cursor: pointer;
    position: relative;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;

    &:first-child {
        border-top-left-radius: 22px;
        border-bottom-left-radius: 22px;
    }

    &:last-child {
        border-top-right-radius: 22px;
        border-bottom-right-radius: 22px;
    }

    @media (max-width: 800px) {
        
        flex-direction: column;
        width: 100%;
        height: 12vh;

        &:first-child {
            border-top-right-radius: 22px;
            border-bottom-left-radius: 0px;
        }

        &:last-child {
            border-bottom-left-radius: 22px;
            border-top-right-radius: 0px;
        }
    }
`;

const TextGauche = styled.div`
    left: 0;
    bottom: 13%;
    height: 12%;
    color: #e0e0e0;
    position: absolute;
    font-size: 20px;
    transform: rotate(-90deg);

    @media (max-width: 800px) {
        top: 5%;
        right: 0;
        transform: rotate(1800deg);
    }
`;


const TextOverlay = styled.div`
    font-family: 'Krona One', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;
    white-space: nowrap;
    bottom: 17%;
    left:-9%;
   
    color: #f7f5ed;
    position: absolute;
    transform: rotate(-90deg);
    @media (max-width: 1000px) {
        transform: rotate(0deg);
        bottom: 0;
        left: 9%;
    }
`;

const NumberOverlay = styled.div`
    left: 3%;
    top: 5%;
    color: #f7f5ed;
    font-family: 'Krona One', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;
    position: absolute;  
    @media (max-width:1000px) {
        left: 10%;
        top: 10%;
    }
`;

const NumeroGh = styled.div`
    left: 3%;
    top: 5%;
    color: #e0e0e0;
    position: absolute;
    font-size: 30px;
    transform: rotate(-90deg);

    @media (max-width: 800px) {
        font-size: 20px;
        transform: rotate(1800deg);
    }
`;

const TextAnim1 = styled.div<{expanded : boolean}>`
    color: #e0e0e0;
    

    ${({ expanded }) => expanded ? css`
        font-size: 20px;
        margin: 10%;
        opacity: 100%;
        transition: opacity 1.3s ease-in-out;
    ` : css`
        opacity: 0%;
        
    `}

    @media (min-width: 800px) and (max-width: 1100px) {
        font-size: 17px;
        
    }

    @media (max-width: 800px) {
        font-size: 14px;
        
    }
`;

const Head = () => {
    const [panel, setPanel] = useState('panel1');

    const handleClick = (panel:any) => {
        setPanel(panel);
    };

    return (
        <>
            <Container5>
                <Text2Head>What shapes our identity !</Text2Head>
                <TitreBisHead>Our objectives have remained unwavering</TitreBisHead>
                <Texte3Head>
                    Imagine, explore, delve into particulars, chase the next wild adventure, forever <br />
                    absorb wisdom, and leave an indelible mark on the world !
                </Texte3Head>
            </Container5>
            <Container6>
                <ButtonsContainer>
                    <Button expanded={panel === 'panel1'} onClick={() => handleClick('panel1')} style={{ backgroundImage: 'url(image1.jpeg)' }}>
                        <div>
                            <NumberOverlay>01</NumberOverlay>
                            <TextOverlay>Our Mission</TextOverlay>
                            <TextAnim1 expanded={panel === 'panel1'}>
                                <h3 style={{ color: "#FC7557" }}>🚀 Unleashing Digital Dreams 🌟</h3>
                                <h3>Eradicate regrets. Fuel ambitions. Ignite dreams.</h3>
                                <p>
                                    At Omegup, our mission is to turn your digital dreams into extraordinary realities.
                                    We're not just developers; we're dreamweavers, crafting digital marvels that defy expectations.
                                </p>
                            </TextAnim1>
                        </div>
                    </Button>

                    <Button expanded={panel === 'panel2'} onClick={() => handleClick('panel2')} style={{ backgroundImage: 'url(image2.jpeg)' }}>
                        <div>
                            <NumberOverlay>02</NumberOverlay>
                            <TextOverlay>Our Vision</TextOverlay>
                            <TextAnim1 expanded={panel === 'panel2'}>
                                <h3 style={{ color: "#949CFF" }}>🌐 Pioneering the Digital Frontier 🚀</h3>
                                <h3>A world where ambition knows no bounds.</h3>
                                <p>
                                    Our vision is to lead the charge in redefining the digital landscape. We envision a world where innovation knows no bounds,
                                    where every pixel tells a story, and where your online presence is nothing short of legendary.
                                </p>
                            </TextAnim1>
                        </div>
                    </Button>

                    <Button expanded={panel === 'panel3'} onClick={() => handleClick('panel3')} style={{ backgroundImage: 'url(image3.jpeg)' }}>
                        <div>
                            <NumberOverlay>03</NumberOverlay>
                            <TextOverlay>Our Vibe</TextOverlay>
                            <TextAnim1 expanded={panel === 'panel3'}>
                                <h3 style={{ color: "#84C67E" }}>🎨 Where Creativity Meets Code 🤝</h3>
                                <h3>A world where ambition knows no bounds.</h3>
                                <p>
                                    Our vibe is a fusion of artistry and technology. We're a creative powerhouse where
                                    collaboration fuels innovation, where every idea has the potential to reshape the digital universe.
                                </p>
                            </TextAnim1>
                        </div>
                    </Button>

                    <Button expanded={panel === 'panel4'} onClick={() => handleClick('panel4')} style={{ backgroundImage: 'url(image4.jpeg)' }}>
                        <div>
                            <NumberOverlay>04</NumberOverlay>
                            <TextOverlay>Our Ambition</TextOverlay>
                            <TextAnim1 expanded={panel === 'panel4'}>
                                <h3 style={{ color: "#FEC63A" }}>🌟 Elevate, Innovate, Impact 🚀</h3>
                                <h3>Pioneer excellence. Set benchmarks.</h3>
                                <p>
                                    Our ambition knows no limits. We aspire to elevate your brand, innovate without compromise,
                                    and leave a lasting impact on the digital world. Together, we'll conquer the impossible.
                                </p>
                            </TextAnim1>
                        </div>
                    </Button>
                </ButtonsContainer>
            </Container6>
        </>
    );
};

export default Head;
