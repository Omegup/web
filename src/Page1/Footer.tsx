import styled from 'styled-components';

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

const Slider = styled.div`
  margin-left: -117px;
  margin-top: -25px;
  margin-bottom: 25px;
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

const SlideItem = styled.div`
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
              <img src={src} alt="" style={{ width: '120%', height: '120%' }} />
            </SlideItem>
          ))}
        </Slider>
      </MainContainer>
    </Container>
  );
};

export default Footer;
