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
<<<<<<< HEAD:src/Page1/Footer.tsx
    'src/assets/footer1.svg',
    'src/assets/Group 25.svg',
    'src/assets/Group 26.svg',
    'src/assets/Group 44.svg',
    'src/assets/Group 50.svg',
    'src/assets/Group 61.svg',
    'src/assets/Group 62.svg',
    'src/assets/Group 65.svg',
    'src/assets/Group 70.svg',
    'src/assets/Group 76.svg',
    'src/assets/Group 78.svg',
    'src/assets/Group 79.svg',
    'src/assets/Group 84.svg',
=======
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

>>>>>>> 8c7b32888e166d429ec9c296e7075ac93f779636:src/components/Footer.tsx
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
<<<<<<< HEAD:src/Page1/Footer.tsx
              <img src={src} alt="" style={{ width: '100%', height: '100%' }} />
=======
              <Image src={src} width="10" height="10" alt="" style={{ width: '120%', height: '120%' }} />
>>>>>>> 8c7b32888e166d429ec9c296e7075ac93f779636:src/components/Footer.tsx
            </SlideItem>
          ))}
        </Slider>
        </SliderContainer>
      </MainContainer>
    </Container>
  );
};

export default Footer;
