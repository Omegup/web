'use client'
import React, { useState } from "react";
import styled from "styled-components";
import { testimonialsContent } from "@/content/testimonials";


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
  margin: 2vw auto 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  width: min(76%, calc(100% - 32px));
  overflow: hidden;

  @media (max-width: 800px) {
    width: min(94%, calc(100% - 16px));
  }
`;

const Bulle = styled.div<{ center: boolean }>`
  flex: 1 1 0;
  min-width: 0;
  transition: transform 0.55s ease, opacity 0.55s ease;
  transform: ${(props) => (props.center ? "translateY(-18px) scale(1.04)" : "translateY(12px) scale(0.94)")};
  opacity: ${(props) => (props.center ? 1 : 0.55)};
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
const DOTS = [
  { small: "48%", medium: "47.3%", portrait: "41.7%" },
  { small: "48%", medium: "47.3%", portrait: "42%" },
  { small: "50%", medium: "49%", portrait: "44%" },
] as const;

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
        <h3>{testimonialsContent.heading}</h3>
        <p>{testimonialsContent.intro}</p>
      </Container>
      <BulleContainer>
        {testimonialsContent.items.map((item, index) => (
          <Bulle key={item.id} center={positions[index] === "center"}>
            <BulleContent boxShadowColor={item.color}>
              <p>{item.quote}</p>
            </BulleContent>
            <Circle size="10px" marginleft={DOTS[index].small} backgroundColor={item.color} />
            <Circle size="20px" marginleft={DOTS[index].medium} backgroundColor={item.color} />
            <Circle size="80px" marginleft={DOTS[index].portrait} bordercolor={item.color} backgroundImage={item.portrait} backgroundColor="" />
            <TextCenter>
              <h3>{item.name}</h3>
              <p>{item.role}</p>
            </TextCenter>
          </Bulle>
        ))}
      </BulleContainer>
      <FlecheContainer>
        <FlecheButton backgroundImage="arrow-left.png" onClick={tourneGauche} />
        <FlecheButton backgroundImage="arrow-right.png" onClick={tourneDroite} />
      </FlecheContainer>
    </>
  );
}

export default TourneImage;
