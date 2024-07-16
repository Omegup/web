import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../Globalstyles';
import GlobalStyle2 from '../GlobalStyle2';

const Container = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 22px;
  
`;

const ButtonsContainer = styled.div`
    height: 641px;
    width: 1206px;
    display: flex;
    border-radius: 22px;
    flex: 1;
    @media (max-width: 1200px) {
        width: 100%;
    }
    @media (max-width: 900px) {
        flex-direction: column;
        height: auto;
    }
`;

const Button = styled.button<{ expanded: boolean; backgroundImage: string; first: boolean; last: boolean }>`
    flex: ${(props) => (props.expanded ? 5 : 0.1)};
    padding: ${(props) => (props.expanded ? 'auto' : '20px,0px,20px,0px')};
    border: 1px solid #e0e0e0;
    transition: flex 0.3s ease-in-out;
    cursor: pointer;
    position: relative;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-attachment: fixed;
    border-top-left-radius: ${(props) => (props.first ? '22px' : '0')};
    border-bottom-left-radius: ${(props) => (props.first ? '22px' : '0')};
    border-top-right-radius: ${(props) => (props.last ? '22px' : '0')};
    border-bottom-right-radius: ${(props) => (props.last ? '22px' : '0')};
    @media (max-width:900px) {
        flex: ${(props) => (props.expanded ? 'none' : 'none')};
        height: ${(props) => (props.expanded ? 'auto' : '100px')};
        padding: ${(props) => (props.expanded ? '20px' : '0px')};
    }
`;

const TextContainer = styled.div<{ expanded: boolean }>`
    margin: 10%;
    color: #f7f5ed;
    opacity: ${(props) => (props.expanded ? 1 : 0)};
    transition: opacity 0.1s ease-out;
    @media (max-width: 900px) {
        margin: 5%;
    }
`;

const TextOverlay = styled.div`
    font-family: 'Krona One', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;
    white-space: nowrap;
    left: 0;
    bottom: 10%;
    color: #f7f5ed;
    position: absolute;
    transform: rotate(-90deg);
    @media (max-width: 900px) {
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
    @media (max-width:900px) {
        left: 10%;
        top: 10%;
    }
`;

const Hstyled = styled.h1`
    font-family: 'Krona One', sans-serif;
    font-size: 34px;
    font-weight: 400;
    line-height: 37.4px;
    letter-spacing: -6.4%;
    @media (max-width: 900px) {
        font-size: 28px;
        line-height: 30px;
    }
`;

const Title = styled.div`
    margin-left: 10%;
    @media (max-width:900px) {
        margin-left: 5%;
        text-align: center;
    }
`;

const Title1 = styled.h3`
    margin-top: 50px;
    color: #fc7557;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    @media (max-width: 900px) {
        font-size: 14px;
        line-height: 20px;
    }
`;

const Title2 = styled.h1`
    color: #222325;
    font-family: 'Krona One', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;
    @media (max-width: 900px) {
        font-size: 20px;
        line-height: 22px;
    }
`;

const styles = {
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
  
};

const Title21 = styled(Title1)`
    color: #faf9f6;
    font-family: 'Krona One', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;
    @media (max-width: 900px) {
        font-size: 20px;
        line-height: 22px;
    }
`;

const Head = () => {
    const [panel, setPanel] = useState('panel1');

    const handleClick = (panel: string) => {
        setPanel(panel);
    };

    const buttonDetails = [
        { id: 'panel1', img: 'src/image1.jpeg', objective: 'Our mission', color: '#FC7557', title: '🚀 Unleashing Digital Dreams 🌟', subtitle: 'Eradicate regrets. Fuel ambitions. Ignite dreams.', text: 'At Omegup, our mission is to turn your digital dreams into extraordinary realities. We\'re not just developers; we\'re dreamweavers, crafting digital marvels that defy expectations.' },
        { id: 'panel2', img: 'src/image2.jpeg', objective: 'Our vision', color: '#949CFF', title: '🌐 Pioneering the Digital Frontier 🚀', subtitle: 'A world where ambition knows no bounds.', text: 'Our vision is to lead the charge in redefining the digital landscape. We envision a world where innovation knows no bounds, where every pixel tells a story, and where your online presence is nothing short of legendary.' },
        { id: 'panel3', img: 'src/image3.jpeg', objective: 'Our vibe', color: '#84C67E', title: '🎨 Where Creativity Meets Code 🤝', subtitle: 'A world where ambition knows no bounds.', text: 'Our vibe is a fusion of artistry and technology. We\'re a creative powerhouse where collaboration fuels innovation, where every idea has the potential to reshape the digital universe.' },
        { id: 'panel4', img: 'src/image4.jpeg', objective: 'Our ambition', color: '#FEC63A', title: '🌟 Elevate, Innovate, Impact 🚀', subtitle: 'Pioneer excellence. Set benchmarks.', text: 'Our ambition knows no limits. We aspire to elevate your brand, innovate without compromise, and leave a lasting impact on the digital world. Together, we\'ll conquer the impossible.' }
    ];

    return (
        <>
        <GlobalStyle/>
        <GlobalStyle2/>
        <Title>
        <Title1> What shapes our identity !</Title1>
           <Title2> Our objectives have remained unwavering</Title2>
            <p style={styles}>Imagine, explore, delve into particulars, chase the next wild adventure, forever <br />absorb wisdom, and leave an indelible mark on the world !</p>
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
                            <Hstyled style={{ color: button.color }}>{button.title}</Hstyled>
                            <Title21>{button.subtitle}</Title21>
                            <p style={styles}>{button.text}</p>
                        </TextContainer>
                    </Button>
                ))}
            </ButtonsContainer>
        </Container></>
    );
};

export default Head;
