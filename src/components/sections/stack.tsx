'use client'
import styled from 'styled-components';
import Image from 'next/image';
const Container = styled.div`
  background-color: #222325;
  margin-top: 50px;
`;

const MainContainer = styled.div`
  margin-top: 70px;
  padding-top: 20px;
  padding-bottom: 40px;
  overflow: hidden;
  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 10px;
  }
`;

const Title = styled.h1`
  margin-left: 117px;
  color: #faf9f6;
  font-family: 'Krona One', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing: -6.4%;
  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 20px;
  }
`;

const Text = styled.p`
  margin-left: 117px;
  color: #faf9f6;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 14px;
    line-height: 20px;
  }
`;
  const SliderContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
`;
const Slider = styled.div`

  display: flex;
  height: 100px;
  width: 200%;
  justify-content: space-evenly;
  animation: slide 15s linear infinite;

  @media (max-width: 768px) {
    margin-left: -20px;
    height: 80px;
  }

  @keyframes slide {
    0% {
      transform: translate(40%);
      
    }
    100%{
      transform:translate(-90%)
    }
  
  }
`;

const SlideItem = styled.div`
  margin-top : 1.2%;
  height: 100%;
  width: 2.2%;
  background-color: #222325;
  border-radius: 22px;

  @media (max-width: 768px) {
    width: 3%;
  }
`;

const Footer = () => {
  const images = [
    'footer1.svg',
    'Group 25.svg',
    'Group 26.svg',
    'Group 44.svg',
    'Group 50.svg',
    'Group 61.svg',
    'Group 62.svg',
    'Group 65.svg',
    'Group 70.svg',
    'Group 76.svg',
    'Group 78.svg',
    'Group 79.svg',
    'Group 84.svg',

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
      <SliderContainer>
        <Slider>
          {images.map((src, index) => (
            <SlideItem key={index}>
              <Image src={src} alt='' width={70} height={70}/>
            </SlideItem>
          ))}
        </Slider>
        </SliderContainer>
      </MainContainer>
    </Container>
  );
};

export default Footer;
