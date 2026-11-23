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
    display: grid;
    position: relative;
    overflow: hidden;
    border-radius: 30px;
`;

const Slide = styled.div<{ $visible: boolean }>`
    grid-area: 1 / 1;
    position: relative;
    padding-bottom: 72px;
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    transform: translateX(${(props) => (props.$visible ? "0" : "36px")});
    transition: opacity 0.45s ease, transform 0.45s ease;
    pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
`;

const TextImage = styled.div`
    overflow: hidden;
    padding: 20px 50px;
`;

const Frame = styled.div`
    flex: 0 0 300px;
    align-self: center;
    box-sizing: border-box;
    height: 230px;
    margin: 28px 8px 28px 28px;
    padding: 14px;
    background: #faf9f6;
    border: 1px solid #222325;
    border-radius: 22px;
    display: grid;
    place-items: center;

    img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    @media (max-width: 900px) {
        flex-basis: auto;
        width: min(300px, calc(100% - 40px));
        margin: 24px auto 0;
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

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 22px;
    margin-top: 22px;
`;

const Button = styled(Link)<{ bgColor: string }>`
    display: inline-block;
    text-decoration: none;
    text-align: center;
    background-color: ${(props) => props.bgColor};
    border-radius: 22px;
    border: 1px solid #222325;
    padding: 8px 16px;
    color: ${(props) => (props.bgColor === "#FEC63A" ? "#222325" : "#F7F5ED")};
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: -4px 4px 0px 0px #222325;
    }
`;

const More = styled(Link)`
    font-family: "Quicksand", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #222325;
    text-decoration: none;

    &:hover {
        color: #fc7557;
    }
`;

const Arrows = styled.div`
    position: absolute;
    right: 28px;
    bottom: 20px;
    z-index: 2;
    display: flex;
    gap: 10px;
`;

const ArrowButton = styled.button<{ $dir: "prev" | "next" }>`
    height: 38px;
    width: 38px;
    padding: 0;
    border: 0;
    border-radius: 30px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-image: url(${(props) => props.$dir === "next" ? "/image-left.png" : "/image-right.png"});
    cursor: pointer;

    &:hover {
        background-image: url(${(props) => props.$dir === "next" ? "/image-left-hover.png" : "/image-right-hover.png"});
        background-size: 120% 120%;
    }
`;
const styles = {
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    marginTop: "16px",
};
const  Displaycontainer=styled.div`
display:flex;
flex-direction: row;
align-items: center;
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
                    <Frame>
                        <img src={item.image} alt={item.title} />
                    </Frame>
                    <TextImage>
                        <H3Styled>{item.title}</H3Styled>
                        <p style={styles}>Technologies Utilisées :</p>
                        <Container2>
                            {item.technologies.map((tech) => (
                                <ContainerItem key={tech}>{tech}</ContainerItem>
                            ))}
                        </Container2>
                        <p style={styles}>{item.summary}</p>
                        <Actions>
                            <Button href={`/case-studies/${item.id}`} bgColor={item.color}>View case studies</Button>
                            <More href="/case-studies">More case studies</More>
                        </Actions>
                    </TextImage></Displaycontainer>
                    <Arrows>
                        <ArrowButton type="button" $dir="prev" aria-label="Previous project" onClick={() => step(-1)} />
                        <ArrowButton type="button" $dir="next" aria-label="Next project" onClick={() => step(1)} />
                    </Arrows>
                </Slide>
                ))}
                </Clip>
                </Shell>
            </MainContainer>
        </>
    );
};

export default Menu_1;
