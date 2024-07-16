import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 35vh;
  border-radius: 22px;
  background-color: #222325;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 0;
  }
`;

const Container_1 = styled.div`
  width: 100%;
  height: 15%;
  background-color: #FEC63A;
  border-radius: 0 0 22px 22px;
  align-self: flex-end;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px 0;
    position: static;
    border-radius: 22px;
  }
`;

const FooterText2 = styled.p`
  color: #222325;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`;

const TextFooter2 = styled.div`
  height: 50%;
  width: 30%;
  font-size: 20px;
  color: #FAF9F6;
  margin-top: 2%;
  margin-left: 10%;
  align-items: center;
  font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    h2{
    font-family: 'Krona One', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;
  }
  p{font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color:#FAF9F6;}
 

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    text-align: center;
    margin-top: 10px;
  }
`;



const Container2Footer2 = styled.div`
h2{    font-family: 'Krona One', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;
}

  line-height: 22px;
  color: #FAF9F6;
  display: flex;
  width: 43%;
  height: 60%;
  margin-top: 2%;
  margin-left: 10%;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
`;

const TextContainer = styled.p`
color: #999999;
font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
  @media (max-width: 768px) {
    text-align: center;
    margin: 5px 0;
  }
`;

const Footer2: React.FC = () => {
  return (
    <>
      <Container>
        <TextFooter2>
          <h2 id="titrefooter2">Omegup</h2>
          <p>
            Stay connected and follow Omegup on social media platforms for daily updates, tips, and inspiration related to web development. Let's engage!
          </p>
          <img src="src/Frame 249.png" alt="Social Media" />
        </TextFooter2>
        <Container2Footer2>
          <div>
            <h2>Quick Links</h2>
            <TextContainer>Home</TextContainer>
            <TextContainer>About Us</TextContainer>
            <TextContainer>Services</TextContainer>
            <TextContainer>Get in touch</TextContainer>
          </div>
          <div>
            <h2>Services</h2>
            <TextContainer>UX/UI Design</TextContainer>
            <TextContainer>Web development</TextContainer>
            <TextContainer>Mobile development</TextContainer>
          </div>
          <div>
            <h2>Contact</h2>
            <TextContainer>
              <img src="src/map.png" alt="Address" /> 10, Cyber Park Zarzis, Medenine
            </TextContainer>
            <TextContainer>
              <img src="src/sms-tracking.png" alt="Email" /> contact@omegup.tn
            </TextContainer>
            <TextContainer>
              <img src="src/call-incoming.png" alt="Phone" /> +216 28 827 941
            </TextContainer>
          </div>
        </Container2Footer2>
        <Container_1>
          <FooterText2>Copyright Notice: © 2023 Omegup. All rights reserved.</FooterText2>
        </Container_1>
      </Container>
    </>
  );
}

export default Footer2;
