"use client"
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Container = styled.footer`
  width: 100%;
  border-radius: 22px;
  background-color: #222325;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
  align-items: start;
  gap: 48px;
  padding: 40px 64px 36px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 36px;
    padding: 36px 32px 32px;
  }

  @media (max-width: 680px) {
    padding: 32px 20px 28px;
  }
`;

const Brand = styled.div`
  color: #faf9f6;

  h2 {
    margin: 0 0 14px;
    font-family: "Krona One", sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.064em;
    white-space: nowrap;
  }

  p {
    margin: 0;
    max-width: 34ch;
    font-family: "Quicksand", sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
  }

  @media (max-width: 1080px) {
    text-align: center;

    p {
      margin-inline: auto;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 14px;
  margin-top: 20px;

  @media (max-width: 1080px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 28px;
  width: 100%;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const Column = styled.div`
  width: max-content;
  max-width: 100%;

  h2 {
    margin: 0 0 16px;
    color: #faf9f6;
    font-family: "Krona One", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.04em;
    white-space: nowrap;
  }

  @media (max-width: 680px) {
    text-align: center;
  }
`;

const Item = styled.p`
  margin: 0 0 10px;

  a {
    color: #999999;
    font-family: "Quicksand", sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #faf9f6;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;
  max-width: 100%;
  margin: 0 0 12px;
  color: #999999;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s ease;

  img {
    flex: 0 0 auto;
    width: 18px;
    height: 18px;
  }

  &:hover {
    color: #faf9f6;
  }

  @media (max-width: 680px) {
    margin-inline: auto;
  }
`;

const Bar = styled.div`
  background-color: #fec63a;
  padding: 14px 16px;
  color: #222325;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
`;

const Footer2: React.FC = () => {
  return (
    <Container>
      <Top>
        <Brand>
          <h2>Omegup</h2>
          <p>
            Stay connected and follow Omegup on social media platforms for daily updates, tips, and inspiration related to web development. Let&apos;s engage!
          </p>
          <Socials>
            <SocialLink href="https://www.linkedin.com/company/omegup/?originalSubdomain=tn" target="_blank">
              <Image src="/Social1.png" alt="LinkedIn" width={24} height={24} />
            </SocialLink>
            <SocialLink href="#">
              <Image src="/Social2.png" alt="Social Media" width={24} height={24} />
            </SocialLink>
            <SocialLink href="#">
              <Image src="/Social3.png" alt="Social Media" width={24} height={24} />
            </SocialLink>
            <SocialLink href="#">
              <Image src="/Social4.png" alt="Social Media" width={24} height={24} />
            </SocialLink>
            <SocialLink href="#">
              <Image src="/Social5.png" alt="Social Media" width={24} height={24} />
            </SocialLink>
          </Socials>
        </Brand>
        <Columns>
          <Column>
            <h2>Quick Links</h2>
            <Item><Link href="#home">Home</Link></Item>
            <Item><Link href="#about">About Us</Link></Item>
            <Item><Link href="#services">Services</Link></Item>
            <Item><Link href="#contact">Get in touch</Link></Item>
          </Column>
          <Column>
            <h2>Services</h2>
            <Item><Link href="#design">UX/UI Design</Link></Item>
            <Item><Link href="#devweb">Web development</Link></Item>
            <Item><Link href="#devmobile">Mobile development</Link></Item>
          </Column>
          <Column>
            <h2>Contact</h2>
            <ContactLink href="https://www.google.com/maps/place/OmegUp/@33.4966778,11.1157896,17z" target="_blank">
              <img src="/map.png" alt="" />
              <span>10, Cyber Park Zarzis, Medenine</span>
            </ContactLink>
            <ContactLink href="mailto:contact@omegup.tn">
              <img src="/sms-tracking.png" alt="" />
              <span>contact@omegup.tn</span>
            </ContactLink>
            <ContactLink href="tel:+21628827941">
              <img src="/call-incoming.png" alt="" />
              <span>+216 28 827 941</span>
            </ContactLink>
          </Column>
        </Columns>
      </Top>
      <Bar>Copyright Notice: © 2023 Omegup. All rights reserved.</Bar>
    </Container>
  );
};

export default Footer2;
