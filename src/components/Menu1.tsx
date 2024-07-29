"use client"
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
// Styled components
const ContainerTitle = styled.div`
    margin-top: 100px;
     margin-left:10%;`;
    const H3Styled=styled.h3`font-family: 'Krona One', sans-serif;
   
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;`
    


const MainContainer = styled.div`
    height: 500px;
    width: 80%;
    margin-left: 10%;
    @media (max-width: 900px) {
        width: auto;
    }


`;

const Container = styled.div<{ shadowColor: string; isVisible: boolean }>`
    align-self: center;
    width: 90%;
    height: 450px;
    border: 1px solid #222325;
    border-radius: 30px;
    box-shadow: -8px 8px 0px 0px ${(props) => props.shadowColor};
   
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
    @media (max-width: 900px) {
        width: auto;
        height: auto;
    }
`;

const TextImage = styled.div<{ isVisible: boolean }>`
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: opacity 1.5s ease-in-out;
    overflow: hidden;
    padding: 20px 50px;
`;

const Img = styled.img<{ isVisible: boolean }>`
    align-self: center;
    margin: 100px;
    height: 250px;
    width: 280px;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: opacity 5s ease;

    transform: scale(1.5);
   
    @media (max-width:1500px) {
        margin: 30px;
        height: 200px;
        width: 220px;
    }
    @media (max-width:1200px) {
        margin: 20px;
        height: 160px;
        width: 180px;
    }
    @media (max-width:500px) {
        margin: 20px;
        height: 150px;
        width: 140px;
    }
    
`;

const Container2 = styled.div`
    display: flex;
    
@media (max-width:900px ) {
    flex-wrap:wrap;
}
   
`;

const ContainerItem = styled.span`
    
    border-radius: 22px;
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-right: 10px;
    border: 0.5px solid rgb(32, 32, 32);
    padding: 10px 20px;
    background-color: rgb(32, 32, 32);
    color:#F7F5ED;

    @media (max-width: 1300px) {
        font-size: 16px;
        padding:7px ;
    }
    @media (max-width: 1000px) {
        font-size: 15px;
        padding:6px ;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        padding:5px ;
        
    }
`;

const Button = styled.p<{ bgColor: string }>`
    background-color: ${(props) => props.bgColor};
    border-radius: 22px;
    border: 1px solid;
    width: 120px;
    padding-left:10px;
      
    margin-bottom: 20px;
    transition: box-shadow 0.3s ease-in-out;
   

    &:hover {
        box-shadow: -4px 4px 0px 0px #222325;
        cursor: pointer;
    }
`;

const StyledLink = styled.p`
    text-decoration: none;
    margin: 20px;
    cursor: pointer;
    padding-bottom: 5px;

    &:hover {
        border-bottom: 1px solid;
    }
`;

const ArrowButton = styled.div<{ float: string; marginRight?: string }>`
    height: 38px;
    width: 38px;
    border-radius: 30px;
    margin-top: 70px;
    float: ${(props) => props.float};
    margin-right: ${(props) => props.marginRight || '0'};
    background-image: url(${(props) => props.marginRight ? 'image-right.png' : 'image-left.png'});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;

    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-image: url(${(props) => props.marginRight ? 'image-right-hover.png' : 'image-left-hover.png'});
        cursor: pointer;
        background-size: 120% 120%;
    }
    @media (max-width: 1000px) {
        margin-top:30px;
        
    }
`;

const styles = {
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    "@media (max-width: 1000px)":{
        fontSize:"14px"

    }
};
const  Displaycontainer=styled.div`
display:flex;
flex-direction: row;
@media (max-width:900px) {
    flex-direction: column;
  
    
}
`
const Menu_1: React.FC = () => {
    const [tableau, setTableau] = useState('tableau1');

    const pivotDroit = (tableau: string) => {
        console.log('Switching to:', tableau); 
        setTableau(tableau);
    };
    const handelClick=()=>{

    }

    return (
        <>
            <ContainerTitle id="references">
                <H3Styled>Explore Our Work</H3Styled>
                <p style={styles}>
                    At Omegup, we take pride in the work we do for our clients. Our dedicated team of talented web developers has created innovative solutions for a wide range of businesses. Here&apos;s an overview of some of our recent references:
                </p>
            </ContainerTitle>

            <MainContainer>
                <Container shadowColor="#FEC63A" isVisible={tableau === 'tableau1'}>
                    <Displaycontainer>
                    <Img isVisible={tableau === 'tableau1'} src="img1.png" alt="Ateliers - 77" />
                    <TextImage isVisible={tableau === 'tableau1'}>
                        <H3Styled>Atéliers-77</H3Styled>
                        <p style={styles}>Technologies Utilisées :</p>
                        <Container2>
                            <ContainerItem>HTML5</ContainerItem>
                            <ContainerItem>CSS3</ContainerItem>
                            <ContainerItem>React</ContainerItem>
                            <ContainerItem>NodeJS</ContainerItem>
                            <ContainerItem>Tailwind</ContainerItem>
                        </Container2>
                        <p style={styles}>We have developed a stylish and functional website for Atelier-77 to showcase their expertise in signage and digital printing. The website provides an intuitive user experience and highlights their impressive portfolio of projects.</p>
                        <Button bgColor="#FEC63A">View case studies</Button>
                        <StyledLink > <Link href={'/page3'}>More case studies</Link></StyledLink>
                        <ArrowButton float="right" onClick={() => pivotDroit('tableau2')}></ArrowButton>
                        <ArrowButton float="right" marginRight="10px" onClick={() => pivotDroit('tableau3')}></ArrowButton>
                    </TextImage></Displaycontainer>
                </Container>

                <Container shadowColor="#949CFF" isVisible={tableau === 'tableau2'}>
                <Displaycontainer> <Img isVisible={tableau === 'tableau2'} src="pc2.png" alt="School Online Tn" />
                    <TextImage isVisible={tableau === 'tableau2'}>
                        <H3Styled>School Online Tn</H3Styled>
                        <p style={styles}>Technologies Utilisées :</p>
                        <Container2>
                            <ContainerItem>React</ContainerItem>
                            <ContainerItem>NextJS</ContainerItem>
                            <ContainerItem>NodeJS</ContainerItem>
                            <ContainerItem>MongoDB</ContainerItem>
                        </Container2>
                        <p style={styles}>Solution School is the comprehensive answer to the management needs of private schools. Our platform provides a suite of robust tools and features that enable educational institutions to efficiently manage all aspects of their operations.</p>
                        <Button bgColor="#949CFF">View case studies</Button>
                        <StyledLink > <Link href={'/page3'}>More case studies</Link></StyledLink>
                        <ArrowButton float="right" onClick={() => pivotDroit('tableau3')}></ArrowButton>
                        <ArrowButton float="right" marginRight="10px" onClick={() => pivotDroit('tableau1')}></ArrowButton>
                    </TextImage></Displaycontainer>
                </Container>
                
                <Container shadowColor="#FC7557" isVisible={tableau === 'tableau3'}>
                    <Displaycontainer>
                    <Img isVisible={tableau === 'tableau3'} src="pc3.png" alt="DSF Fr" />
                    <TextImage isVisible={tableau === 'tableau3'}>
                        <H3Styled>DSF Fr</H3Styled>
                        <p style={styles}>Technologies Utilisées :</p>
                        <Container2>
                            <ContainerItem>React</ContainerItem>
                            <ContainerItem>NodeJS</ContainerItem>
                            <ContainerItem>NodeJS</ContainerItem>
                        </Container2>
                        <p style={styles}> DSF Déménagement Services France is your trusted partner for all your moving needs in France. With many years of experience, we provide tailor-made moving solutions for businesses and individuals.<br /> <br /></p>
                   
                    <Button bgColor="#FC7557" > View case studies   </Button>
                    
                    <StyledLink > <Link href={'/page3'}>More case studies</Link></StyledLink>
                        <ArrowButton float="right" onClick={() => pivotDroit('tableau1')}></ArrowButton>
                        <ArrowButton float="right" marginRight="10px" onClick={() => pivotDroit('tableau2')}></ArrowButton>
                    </TextImage></Displaycontainer>
                </Container>
            </MainContainer>
        </>
    );
};

export default Menu_1;
