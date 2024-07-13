import React from 'react';
import styled from 'styled-components';

const Container = styled.div`// Represents the main footer container with a dark background.
  background-color: #222325;
`;

const MainContainer = styled.div`//Styles the main content area of the footer with margin and padding.
  margin-top: 70px;
  padding-top: 20px;
  padding-bottom:40px;
  overflow: hidden;
`;

const Title = styled.h1`//Styles the footer title.
  margin-left: 117px;
  color: #faf9f6;
`;

const Text = styled.p`//Styles the paragraph text in the footer.
  margin-left: 117px;
  color: #faf9f6;
`;

const Slider = styled.div`//Contains the sliding animation for the images.
  margin-left: -117px;
  margin-top: 35px;
  display: flex;
  height: 77px;
  width: 200%;
  justify-content: space-evenly;
  animation: slide 15s linear infinite;
  @keyframes slide {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translate(-50%);
    }
    100% {
      transform: translate(0%);
    }
  }
`;

const SlideItem = styled.div`////Represents each sliding image item.
  height: 100%;
  width: 2.2%;
  background-color: #222325;
  border-radius: 22px;
`;

const Footer = () => {
  const images = [
    'src/footer1.svg',
    'src/Group 25.svg',
    'src/Group 26.svg',
    'src/Group 44.svg',
    'src/Group 50.svg',
    'src/Group 61.svg',
    'src/Group 62.svg',
    'src/Group 65.svg',
    'src/Group 70.svg',
    'src/Group 76.svg',
    'src/Group 78.svg',
    'src/Group 79.svg',
    'src/Group 84.svg',
  ];

  return (
    <Container>
      <MainContainer>
        <Title>Technologies We Excel In</Title>
        <Text>
          At Omegup, we harness the power of cutting-edge technologies to drive
          digital innovation and deliver exceptional results. Our expertise
          spans a wide range <br />of technologies, including:
        </Text>
        <br />
        <Slider>
          {images.map((src, index) => (
            <SlideItem key={index}>
              <img src={src} alt="" style={{ width: '100%', height: '100%' }} />
            </SlideItem>
          ))}
        </Slider>
      </MainContainer>
    </Container>
  );
};

export default Footer;
