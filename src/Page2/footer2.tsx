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

  @media only screen and (min-width: 769px) and (max-width:1300px) {
    height : 12%;
}
  @media (max-width: 768px) {
    height: 10vh;
    padding: 10px 0;
    position: static;
    border-radius: 0 0 22px 22px;
  }
`;

const FooterText2 = styled.p`
  color: #222325;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    @media only screen and (min-width: 769px) and (max-width:1300px) {
      font-size : 11px;
  }
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
    color:#FAF9F6;
    @media only screen and (min-width: 769px) and (max-width:1300px) {
      font-size : 10px;
  }}
 
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    text-align: center;
    margin-left: 0;
  }
`;



const Container2Footer2 = styled.div`
h2{    font-family: 'Krona One', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;

    @media only screen and (min-width: 769px) and (max-width:1300px) {
      font-size : 15px;
  }
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

const TextContainer = styled.a`
color: #999999;

&:hover  {
  color: #FAF9F6;
  
  border-bottom: 0.5px solid;
  
  
  cursor: pointer;
  transition: color 0.5s ease-in-out;
}
font-family: 'Quicksand', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 31px;


    @media only screen and (min-width: 769px) and (max-width:1300px) {
      font-size : 11px;
  }
  @media (max-width: 768px) {
    
   
    
  }
`;

const Lienfooter = styled.div `

  display: flex;
  gap:10px;
  
  @media (max-width: 768px) {
    margin-left : 38%;
  }

`
const Lienfootersocialmedia = styled.a `

  cursor: pointer;



`


const Titrefooter = styled.h2 `

font-size : 30px;
@media only screen and (min-width: 769px) and (max-width:1300px) {
  font-size : 15px;
}

`

const Footer2: React.FC = () => {
  return (
    <>
      <Container>
        <TextFooter2>
          <h2 id="titrefooter2">Omegup</h2>
          <p>
            Stay connected and follow Omegup on social media platforms for daily updates, tips, and inspiration related to web development. Let's engage!
          </p>
          <Lienfooter>
          <Lienfootersocialmedia href="#"><img src="src/Social1.png" alt="Social Media" /></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><img src="src/Social2.png" alt="Social Media" /></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><img src="src/Social3.png" alt="Social Media" /></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><img src="src/Social4.png" alt="Social Media" /></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><img src="src/Social5.png" alt="Social Media" /></Lienfootersocialmedia>
          </Lienfooter>
        </TextFooter2>
        <Container2Footer2>
          <div>
            <Titrefooter>Quick Links</Titrefooter>
            
            <TextContainer>Home</TextContainer><br/>
            
            <TextContainer>About Us</TextContainer><br/>
            <TextContainer>Services</TextContainer><br/>
            <TextContainer>Get in touch</TextContainer><br/>
          </div>
          <div>
            <Titrefooter>Services</Titrefooter>
            <TextContainer>UX/UI Design</TextContainer><br/>
            <TextContainer>Web development</TextContainer><br/>
            <TextContainer>Mobile development</TextContainer><br/>
          </div>
          <div>
            <Titrefooter>Contact</Titrefooter>
            <TextContainer>
              <img src="src/map.png" alt="Address" /> 10, Cyber Park Zarzis, Medenine
            </TextContainer><br/>
            <TextContainer>
              <img src="src/sms-tracking.png" alt="Email" /> contact@omegup.tn
            </TextContainer><br/>
            <TextContainer>
              <img src="src/call-incoming.png" alt="Phone" /> +216 28 827 941
            </TextContainer><br/>
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
