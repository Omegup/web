'use client'
import Link from "next/link";
import styled from "styled-components";
import { projectsContent } from "@/content/projects";
import { colorAt } from "@/components/colors";
// Styled components

    const H3Styled=styled.h3`font-family: 'Krona One', sans-serif;
   
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;
    margin: 0 0 12px;`
    


const MainContainer = styled.div`
   
    width: 80%;
    margin-left: 10%;
    border: 1px solid rgb(34, 35, 37);
    border-radius:20px;
    @media (max-width: 900px) {
    }


`;

const Container = styled.div`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #222325;
`;

const TextImage = styled.div`
    flex: 1 1 auto;
    min-width: 0;
    background-color: #222325;
    overflow: visible;
    padding: 28px 40px 12px;
    color: white;
    @media (max-width: 700px) {
        padding: 24px 20px 8px;
    }
`;

const Img = styled.img`
    align-self: center;
    flex: 0 0 auto;
    margin: 28px;
    height: 220px;
    width: 280px;
    object-fit: contain;

    @media (max-width: 900px) {
        width: calc(100% - 40px);
        height: auto;
        margin: 20px auto;
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
    background-color:#FAF9F6;
    color:#222325;

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
const Texttitle=styled(TextImage)`
background-color:#FAF9F6;
color:black;
margin-left:8.125%;
margin-top:80px;
margin-bottom:28px;
width:67%;
@media (max-width: 900px) {
    width: 90%;
    
}`
const Button = styled(Link)<{ bgColor: string }>`
    display: inline-block;
    text-decoration: none;
    background-color: ${(props) => props.bgColor};
    border-radius: 22px;
    margin-top:20px;
    border:none;
    width: 150px;
    padding:5px;
    text-align: center;
    color: ${(props)=>( props.bgColor=== '#FEC63A')?'#222325':'#F7F5ED'};
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
align-items: stretch;
@media (max-width:900px) {
    flex-direction: column;
}
`
function App4() {
  const projects = projectsContent.items;
  return (
    <>
      <Texttitle>
        <H3Styled>{projectsContent.heading}</H3Styled>
        <p style={styles}>{projectsContent.intro}</p>
      </Texttitle>
      <MainContainer>
        {projects.map((project, index) => (
          <Container key={project.id} style={index === projects.length - 1 ? { borderBottom: "0px" } : undefined}>
            <Displaycontainer>
              <Img src={project.image} alt={project.title} />
              <TextImage
                style={
                  index === 0
                    ? { borderTopRightRadius: "20px" }
                    : index === projects.length - 1
                      ? { borderBottomRightRadius: "20px" }
                      : undefined
                }
              >
                <H3Styled>{project.title}</H3Styled>
                <p style={styles}>Technologies Utilisées :</p>
                <Container2>
                  {project.technologies.map((tech) => (
                    <ContainerItem key={tech}>{tech}</ContainerItem>
                  ))}
                </Container2>
                <p style={styles}>{project.summary}</p>
                <Button href={`/case-studies/${project.id}`} bgColor={colorAt(index)}>View project</Button>
              </TextImage>
            </Displaycontainer>
          </Container>
        ))}
      </MainContainer>
    </>
  );
}

export default App4;
