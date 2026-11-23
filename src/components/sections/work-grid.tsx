"use client"
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { projectsContent } from "@/content/projects";
// Styled components
const ContainerTitle = styled.div`
    margin-top: 100px;
  
     margin-left:10%;
       width: 80%;
     margin-bottom: 28px;`;
    const H3Styled=styled.h3`font-family: 'Krona One', sans-serif;
   
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;
    margin: 0 0 12px;`
    


const MainContainer = styled.div`
    width: min(90%, calc(100% - 32px));
    margin-inline: auto;
    padding: 4px 8px 14px 12px;
`;

const Shell = styled.div<{ $color: string }>`
    border: 1px solid #222325;
    border-radius: 30px;
    box-shadow: -8px 8px 0px 0px ${(props) => props.$color};
    transition: box-shadow 0.45s ease;
`;

const Clip = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 30px;
`;

const Slide = styled.div<{ $visible: boolean }>`
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    transform: translateX(${(props) => (props.$visible ? "0" : "36px")});
    transition: opacity 0.45s ease, transform 0.45s ease;
    pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
    ${(props) =>
        props.$visible
            ? ""
            : `
        position: absolute;
        inset: 0;
        height: max-content;
    `}
`;

const TextImage = styled.div`
    overflow: hidden;
    padding: 20px 50px;
`;

const Img = styled.img`
    align-self: center;
    flex: 0 0 auto;
    margin: 28px;
    height: 220px;
    width: 280px;
    object-fit: contain;

    @media (max-width: 700px) {
        margin: 20px auto;
        height: 180px;
        width: min(280px, 80%);
    }
`;

const Container2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;

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

const Button = styled(Link)<{ bgColor: string }>`
    display: inline-block;
    text-decoration: none;
    background-color: ${(props) => props.bgColor};
    border-radius: 22px;
    margin-top:20px;
    border: 1px solid;
    width: 150px;
    padding:5px;
    @media (max-width:800px) {
        margin-top:${(props)=>( props.bgColor==='#FC7557')?'44px':'20px'};
      }
    margin-bottom: 20px;
    transition: box-shadow 0.3s ease-in-out;
    

    &:hover {
        box-shadow: -4px 4px 0px 0px #222325;
        cursor: pointer;
    }
`;

const StyledLink = styled.p`
    text-decoration: none;
    
    cursor: pointer;
    padding-bottom: 5px;
    width: 150px;
    &:hover {
        border-bottom: 0.5px solid;
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
`
const styles = {
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    marginTop: "16px",
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
    const projects = projectsContent.items;
    const [index, setIndex] = useState(0);
    const project = projects[index];
    const step = (delta: number) => {
        setIndex((current) => (current + delta + projects.length) % projects.length);
    };

    return (
        <>
            <ContainerTitle id="references">
                <H3Styled>Explore Our Work</H3Styled>
                <p style={styles}>
                    At Omegup, we take pride in the work we do for our clients. Our dedicated team of talented web developers has created innovative solutions for a wide range of businesses. Here&apos;s an overview of some of our recent references:
                </p>
            </ContainerTitle>

            <MainContainer>
                <Shell $color={project.color}>
                <Clip>
                {projects.map((item, itemIndex) => (
                <Slide key={item.id} $visible={itemIndex === index}>
                    <Displaycontainer>
                    <Img src={item.image} alt={item.title} />
                    <TextImage>
                        <H3Styled>{item.title}</H3Styled>
                        <p style={styles}>Technologies Utilisées :</p>
                        <Container2>
                            {item.technologies.map((tech) => (
                                <ContainerItem key={tech}>{tech}</ContainerItem>
                            ))}
                        </Container2>
                        <p style={styles}>{item.summary}</p>
                        <Button href={`/case-studies/${item.id}`} bgColor={item.color}>View case studies</Button>
                        <StyledLink><Link href="/case-studies">More case studies</Link></StyledLink>
                        <ArrowButton float="right" onClick={() => step(-1)}></ArrowButton>
                        <ArrowButton float="right" marginRight="10px" onClick={() => step(1)}></ArrowButton>
                    </TextImage></Displaycontainer>
                </Slide>
                ))}
                </Clip>
                </Shell>
            </MainContainer>
        </>
    );
};

export default Menu_1;
