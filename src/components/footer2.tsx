"use client"
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
            
          <Lienfootersocialmedia href="https://www.linkedin.com/company/omegup/?originalSubdomain=tn" target="_blank"> <Image src="/Social1.png" alt="Social Media" width={24} height={24}/></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><Image src="/Social2.png" alt="Social Media" width={24} height={24}/></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><Image src="/Social3.png" alt="Social Media" width={24} height={24}/></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><Image src="/Social4.png" alt="Social Media" width={24} height={24} /></Lienfootersocialmedia>
          <Lienfootersocialmedia href="#"><Image src="/Social5.png" alt="Social Media"width={24} height={24} /></Lienfootersocialmedia>
          </Lienfooter>
        </TextFooter2>
        <Container2Footer2>
          <div>
            <h2 style={{marginBottom:'15px'}}>Quick Links</h2>
            <TextContainer><Link href={'#home'}>Home</Link></TextContainer>
            <TextContainer><Link href={'#about'}>About Us</Link></TextContainer>
            <TextContainer><Link href={'#services'}>Services</Link></TextContainer>
            <TextContainer><Link href={'#contact'}>Get in touch</Link></TextContainer>
          </div>
          <div>
            <h2 style={{marginBottom:'15px'}} >Services</h2>
            <TextContainer><Link href={'#design'}>UX/UI Design</Link></TextContainer>
            <TextContainer><Link href={'#devweb'}>Web development</Link></TextContainer>
            <TextContainer><Link href={'#devmobile'}>Mobile development</Link></TextContainer>
            
          </div>
          <div style={{marginLeft:'20px'}}>
            <H2Styled >Contact</H2Styled>
            <TextContainer style={{position:'relative'}}>
            <Lienfootersocialmedia href="https://www.google.com/maps/place/OmegUp/@33.4966778,11.1157896,17z/data=!3m1!4b1!4m6!3m5!1s0x13aaefeefabcd13f:0xab85ea46c136a0b8!8m2!3d33.4966778!4d11.1157896!16s%2Fg%2F11s_xqyh7x?entry=ttu"target="_blank"><img src="map.png" alt="Address"  style={{ position:"absolute", bottom:'5%',left:'-12%'}} />  10, Cyber Park Zarzis, Medenine</Lienfootersocialmedia>
            </TextContainer>
            <TextContainer style={{position:'relative'}}>
            <Lienfootersocialmedia href="mailto:contact@omegup.tn"> <img src="sms-tracking.png" alt="Email"style={{ position:"absolute", bottom:'5%',left:'-12%'}} /> contact@omegup.tn</Lienfootersocialmedia>
            </TextContainer>
            <TextContainer style={{position:'relative'}}>
            <Lienfootersocialmedia href="tel:+216 28 827 941" >  <img src="call-incoming.png" alt="Phone" style={{ position:"absolute", bottom:'5%',left:'-12%'}} /> +216 28 827 941</Lienfootersocialmedia>
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

