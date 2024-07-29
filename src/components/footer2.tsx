"use client"
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  min-height: 285px;
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
const H2Styled=styled.h2`
margin-bottom:15px;
@media (max-width: 900px) {
  
}`



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
margin-top:5px;
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
const Lienfooter = styled.div `
  margin-top:10;
  display: flex;
  gap:10px;
  
  @media (max-width: 768px) {
    margin-left : 38%;
  }

`
const Lienfootersocialmedia = styled.a `

  cursor: pointer;



`
const Footer2: React.FC = () => {
  return (
    <>
      <Container>
        <TextFooter2>
          <h2 style={{marginBottom:'15px'}} >Omegup</h2>
          <p>
            Stay connected and follow Omegup on social media platforms for daily updates, tips, and inspiration related to web development. Let&apos;s engage!
          </p>
          <Lienfooter >
            
          <Lienfootersocialmedia href="#"> <Image src="/Social1.png" alt="Social Media" width={24} height={24}/></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><Image src="/Social2.png" alt="Social Media" width={24} height={24}/></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><Image src="/Social3.png" alt="Social Media" width={24} height={24}/></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><Image src="/Social4.png" alt="Social Media" width={24} height={24} /></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><Image src="/Social5.png" alt="Social Media"width={24} height={24} /></Lienfootersocialmedia>
          </Lienfooter>
        </TextFooter2>
        <Container2Footer2>
          <div>
            <h2 style={{marginBottom:'15px'}}>Quick Links</h2>
            <TextContainer>Home</TextContainer>
            <TextContainer>About Us</TextContainer>
            <TextContainer>Services</TextContainer>
            <TextContainer>Get in touch</TextContainer>
          </div>
          <div>
            <h2 style={{marginBottom:'15px'}} >Services</h2>
            <TextContainer>UX/UI Design</TextContainer>
            <TextContainer>Web development</TextContainer>
            <TextContainer>Mobile development</TextContainer>
          </div>
          <div style={{marginLeft:'20px'}}>
            <H2Styled >Contact</H2Styled>
            <TextContainer style={{position:'relative'}}>
              <img src="map.png" alt="Address"  style={{ position:"absolute", bottom:'5%',left:'-12%'}} /> 10, Cyber Park Zarzis, Medenine
            </TextContainer>
            <TextContainer style={{position:'relative'}}>
              <img src="sms-tracking.png" alt="Email"style={{ position:"absolute", bottom:'5%',left:'-12%'}} /> contact@omegup.tn
            </TextContainer>
            <TextContainer style={{position:'relative'}}>
              <img src="call-incoming.png" alt="Phone" style={{ position:"absolute", bottom:'5%',left:'-12%'}} /> +216 28 827 941
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

