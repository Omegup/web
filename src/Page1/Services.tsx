import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../Globalstyles';
import GlobalStyle2 from '../GlobalStyle2';

const Container = styled.div`
  margin-top: 70px;
  margin-left: 117px;
`;

const Boxing = styled.div`
  margin-left: 117px;
  display: grid;
  margin-top: 60px;
  margin-left: 117px; 
  height: auto;
  width: auto;
  width: 150dvh;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    width: auto;
    margin-left: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    margin-left: 0;
  }
`;

const GridItem = styled.span`
  padding: 20px;

  @media (max-width: 900px) {
    padding: 10px;
  }
`;

const GridItemWithMargin = styled(GridItem)`
  margin-left: 70px;

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

const Title = styled.h3`
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

const Text = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

 
`;

const Circle = styled.div<{ bgColor: string }>`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  opacity: 20%;
  ${({ bgColor }) => `background-color: ${bgColor};`}

  @media (max-width: 900px) {
    height: 70px;
    width: 70px;
  }
`;

const Img = styled.img`
  margin-top: -120px;
  margin-bottom: 25px;
  margin-left: 12px;
  height: 65px;
  width: 60px;

  @media (max-width: 900px) {
    margin-top: -90px;
    height: 50px;
    width: 45px;
  }
`;

const styles = {
  color: "#222325",
  fontFamily: "'Krona One', sans-serif",
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "26.4px",
  letterSpacing: "-6.4%",
 
};

const stylesp = {
  fontFamily: "'Quicksand', sans-serif",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "24px",
 
};

const Services: React.FC = () => {
  return (
    <>
      
      <Container>
        <h3 style={styles}>Our Services</h3>
        <p style={stylesp}>At Omegup, we specialize in crafting exceptional digital experiences. Our core services include:</p>
      </Container>
      <Boxing>
        <GridItem>
          <Circle bgColor="#949CFF" />
          <Img src="src/images/image50.png" alt="" />
          <Title>Web Development<span>.</span></Title>
          <Text>
            🌐 Website Design & Development: Craft 
            websites that leave a lasting impression and 
            drive results.<br/>
            🚀 Web App Development: Build dynamic and 
            powerful web applications to meet your 
            unique needs.<br/>
            📱 Responsive Design: Ensure your web 
            presence is seamless across all devices.
          </Text>
        </GridItem>
        <GridItemWithMargin>
          <Circle bgColor="#FC7557" />
          <Img src="src/images/image51.png" alt="" />
          <Title>UC/UI Design<span>.</span></Title>
          <Text>
            🎨 User-Centric Design: We create intuitive 
            and visually stunning user interfaces that 
            captivate and engage.<br/>    
            🔍 User Research: Uncover insights to inform 
            design decisions and enhance user 
            experiences.<br/>
            🚀 Prototyping & Testing: Refine designs
            through iterative prototyping and user testing.
          </Text>
        </GridItemWithMargin>
        <GridItemWithMargin>
          <Circle bgColor="#FEC63A" />
          <Img src="src/images/image49.png" alt="" />
          <Title>Mobile Development<span>.</span></Title>
          <Text>
            📱 iOS & Android Apps: Develop mobile apps 
            that shine on every platform and provide
            exceptional user experiences.<br/>
            💡 Mobile Strategy: Create strategies to 
            conquer the mobile market and reach your 
            audience effectively.<br/>
            🚀 App Optimization: Enhance app 
            performance.
          </Text>
        </GridItemWithMargin>
      </Boxing>
    </>
  );
};

export default Services;
