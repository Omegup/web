'use client'
import React, { useState } from "react";
import styled from "styled-components";


// Styled components
const Container = styled.div`

  text-align: left;
margin-left:10%;
  h3 {
    font-family: 'Krona One', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;
    text-align: left;
    margin-bottom:20px;
    
  }
  p {
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  @media (max-width: 1000px) {
    margin-top: 150px;
    margin-bottom:50px;
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 600px) {
    margin-top: 180px;
    margin-bottom:50px;
  }


`;

const BulleContainer = styled.div`
  margin: 2vw 10vw ;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction:row;
  width: calc(100% - 24%);
  height: auto;
`;

const Bulle = styled.div<{ center: boolean }>`
  transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;
  transform: ${(props) => (props.center ? "translateY(-15%)" : "none")};
  opacity: ${(props) => (props.center ? 1 : 0.4)};
 

`;

const BulleContent = styled.div<{ boxShadowColor: string }>`
  margin: 5vw 3vw 0;
  box-sizing: border-box;
  border: 1px solid;
  width: 80%;
  height: 35%;
  border-radius: 22px;
  box-shadow: -6px 6px 0 0 ${(props) => props.boxShadowColor};
  padding: 18px;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.1vw;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Circle = styled.div<{ size: string; marginleft: string; backgroundColor: string; bordercolor?: string; backgroundImage?: string }>`
  margin-top: 2%;
  margin-left: ${(props) => props.marginleft};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => (props.bordercolor ? `3px solid ${props.bordercolor}` : "0.5px solid")};
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  background-image: ${(props) => (props.backgroundImage ? `url(${props.backgroundImage})` : "none")};
  background-size: 100%;
`;

const FlecheContainer = styled.div`
  margin-bottom: 10vh;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlecheButton = styled.button<{ backgroundImage: string }>`
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.backgroundImage});
  background-color: #f7f5ed;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 22px;
  margin: 0 15px;
  transition: background-image 0.3s ease-in-out;

  &:hover {
    background-image: url(${(props) => props.backgroundImage.replace('.png', '-hover.png')});
    cursor: pointer;
  }
`;

const TextCenter = styled.div`
  h3 {
    text-align: center;
    font-family: 'Krona One', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height:26.4px;
    letter-spacing: -6.4%;
  }
  p {
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 2.1vw;
  }
 
  @media (max-width: 600px) {
    margin-top: 150px;
    margin-bottom:50px;
    margin-top:0px;
    h3 {
    
      font-size: 15px;
    }
    p {
      font-size: 12px;
    }}
`;

// Component
const TourneImage: React.FC = () => {
  const [positions, setPositions] = useState(['notCenter', 'center', 'notCenter']);

  const tourneDroite  = () => {
    setPositions(prev => [prev[2], prev[0], prev[1]]);
  };

  const tourneGauche = () => {
    setPositions(prev => [prev[1], prev[2], prev[0]]);
  };

  return (
    <>
   
      <Container>
        <h3>What Our Clients Say</h3>
        <p>Discover why our clients trust us. Read what they have to say about our services, solutions, and dedication to 
          their success. We take pride in their feedback and look forward to serving you with the same level of excellence.
        </p>
      </Container>
      <BulleContainer>
        <Bulle center={positions[0] === 'center'}>
          <BulleContent boxShadowColor="#FC7557">
            <p>Working with Omegup was a game-changer for our business. Their web development expertise transformed our online presence, making it not only visually stunning but also incredibly user-friendly.</p>
          </BulleContent>
          <Circle size="10px" marginleft="48%" backgroundColor="#FC7557" />
          <Circle size="20px" marginleft="47.3%" backgroundColor="#FC7557" />
          <Circle size="80px" marginleft="41.7%" bordercolor="#FC7557" backgroundImage="p3.png" backgroundColor="" />
          <TextCenter>
            <h3>John Smith</h3>
            <p>Founder of EcomSolutions</p>
          </TextCenter>
        </Bulle>
        <Bulle center={positions[1] === 'center'}>
          <BulleContent boxShadowColor="#949CFF">
            <p>Chez Omegup, we found a team that not only takes pride in their work but also delivers outstanding results. Their innovative solutions and dedication to our project exceeded our expectations.</p>
          </BulleContent>
          <Circle size="10px" marginleft="48%" backgroundColor="#949CFF" />
          <Circle size="20px" marginleft="47.3%" backgroundColor="#949CFF" />
          <Circle size="80px" marginleft="42%" bordercolor="#949CFF" backgroundImage="p2.png" backgroundColor=""/>
          <TextCenter>
            <h3>Sarah Johnson</h3>
            <p>CEO of TechWizards Inc</p>
          </TextCenter>
        </Bulle>
        <Bulle center={positions[2] === 'center'}>
          <BulleContent boxShadowColor="#FEC63A">
            <p>Omegup has been a valuable partner in our online journey. Their web development skills have helped us reach new heights. They designed a website that not only looks fantastic but also performs seamlessly.</p>
          </BulleContent>
          <Circle size="10px" marginleft="50%" backgroundColor="#FEC63A" />
          <Circle size="20px" marginleft="49%" backgroundColor="#FEC63A" />
          <Circle size="80px" marginleft="44%" bordercolor="#FEC63A" backgroundImage="p1.png" backgroundColor=""/>
          <TextCenter>
            <h3>Alex Turner</h3>
            <p>COO of Streamline Logistics</p>
          </TextCenter>
        </Bulle>
      </BulleContainer>
      <FlecheContainer>
        <FlecheButton backgroundImage="arrow-left.png" onClick={tourneGauche} />
        <FlecheButton backgroundImage="arrow-right.png" onClick={tourneDroite} />
      </FlecheContainer>
    </>
  );
}

export default TourneImage;
