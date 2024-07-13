import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 70vh;
    width: 80%;
    margin-left:10%;
    margin-right:10%;
    border-radius: 22px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    border-radius: 22px;
    flex: 1;
`;

const Button = styled.button<{expanded:boolean,backgroundImage:string,first:boolean,last:boolean}>`
    flex: ${(props) => (props.expanded ? 5 : 0.1)};
    width: ${(props) => (props.expanded ? 'auto' : '10%')};
    border: 1px solid #e0e0e0;
    transition: flex 0.6s ease-in-out;
    cursor: pointer;
    position: relative;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-attachment: fixed;
    border-top-left-radius: ${(props) => (props.first ? '22px' : '0')};
    border-bottom-left-radius: ${(props) => (props.first ? '22px' : '0')};
    border-top-right-radius: ${(props) => (props.last ? '22px' : '0')};
    border-bottom-right-radius: ${(props) => (props.last ? '22px' : '0')};
`;

const TextContainer = styled.div<{expanded:boolean}>`
    margin: 10%;
    color: #e0e0e0;
    opacity: ${(props) => (props.expanded ? 1 : 0)};
    transition: opacity 0.3s ease-in-out;

`;

const TextOverlay = styled.div`
    overflow: hidden;
    white-space: nowrap;
    left: 0;
    bottom: 13%;
    color: #e0e0e0;
    position: absolute;
    font-size: 30px;
    transform: rotate(-90deg);
`;

const NumberOverlay = styled.div`
    left: 3%;
    top: 5%;
    color: #e0e0e0;
    position: absolute;
    font-size: 30px;
    
`;

const Head = () => {
    const [panel, setPanel] = useState('panel1');

    const handleClick = (panel:string) => {
        setPanel(panel);
    };

    const buttonDetails = [
        { id: 'panel1', img: 'src/image1.jpeg',objective:'Our mission', color: '#FC7557', title: '🚀 Unleashing Digital Dreams 🌟', subtitle: 'Eradicate regrets. Fuel ambitions. Ignite dreams.', text: 'At Omegup, our mission is to turn your digital dreams into extraordinary realities. We\'re not just developers; we\'re dreamweavers, crafting digital marvels that defy expectations.' },
        { id: 'panel2', img: 'src/image2.jpeg',objective:'Our vision', color: '#949CFF', title: '🌐 Pioneering the Digital Frontier 🚀', subtitle: 'A world where ambition knows no bounds.', text: 'Our vision is to lead the charge in redefining the digital landscape. We envision a world where innovation knows no bounds, where every pixel tells a story, and where your online presence is nothing short of legendary.' },
        { id: 'panel3', img: 'src/image3.jpeg',objective:'Our vibe', color: '#84C67E', title: '🎨 Where Creativity Meets Code 🤝', subtitle: 'A world where ambition knows no bounds.', text: 'Our vibe is a fusion of artistry and technology. We\'re a creative powerhouse where collaboration fuels innovation, where every idea has the potential to reshape the digital universe.' },
        { id: 'panel4', img: 'src/image4.jpeg',objective:'Our ambition', color: '#FEC63A', title: '🌟 Elevate, Innovate, Impact 🚀', subtitle: 'Pioneer excellence. Set benchmarks.', text: 'Our ambition knows no limits. We aspire to elevate your brand, innovate without compromise, and leave a lasting impact on the digital world. Together, we\'ll conquer the impossible.' }
    ];
    const Title=styled.div`
    margin-left :10%;`
    const Title1=styled.h3`
    color: red;
    `
    const  Title2=styled.h1``

    return (
        <>
        <Title>
        <Title1> What shapes our identity !</Title1>
           <Title2> Our objectives have remained unwavering</Title2>
            <p>Imagine, explore, delve into particulars, chase the next wild adventure, forever <br />absorb wisdom, and leave an indelible mark on the world !</p>
        </Title> 
       <Container>
            <ButtonsContainer>
                {buttonDetails.map((button, index) => (
                    <Button
                        key={index}
                        expanded={panel === button.id}
                        backgroundImage={button.img}
                        first={index === 0}
                        last={index === buttonDetails.length - 1}
                        onClick={() => handleClick(button.id)}
                    >
                        <NumberOverlay>{`0${index + 1}`}</NumberOverlay>
                        <TextOverlay>{button.objective}</TextOverlay>
                        <TextContainer expanded={panel === button.id}>
                            <h3 style={{ color: button.color }}>{button.title}</h3>
                            <h3>{button.subtitle}</h3>
                            <p>{button.text}</p>
                        </TextContainer>
                    </Button>
                ))}
            </ButtonsContainer>
        </Container></>
    );
};

export default Head;
