'use client'
import styled from "styled-components";
const H3Styled=styled.h3`font-family: 'Krona One', sans-serif;
   
    font-size: 24px;
    font-weight: 400;
    line-height: 26.4px;
    letter-spacing: -6.4%;`
    


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
    height: 450px;
    border-bottom:1px solid;
    @media (max-width:1500px) {
        width: auto;
        height: auto;
    }
`;

const TextImage = styled.div`
background-color:#222325;

    overflow: hidden;
    padding: 20px 50px;
    color: white;
    border-bottom:solid 1px white;
    @media (max-width:1500px) {
       
        height: 100%;
        width: 100%;
    }
`;

const Img = styled.img`
    align-self: center;
    margin: 100px;
    height: 250px;
    width: 280px;
 
    @media (max-width:1500px) {
        margin: 20px;
        height: 250px;
        width: 280px;
    }
    @media (max-width:700px) {
        margin: 20px;
        height: 180px;
        width: 200px;
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
margin-bottom:10px;
width:67%;
@media (max-width: 900px) {
    width: 90%;
    
}`
const Button = styled.p<{ bgColor: string }>`
    background-color: ${(props) => props.bgColor};
    border-radius: 22px;
    margin-top:20px;
    border:none;
    width: 150px;
    padding:5px;
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
function App4() {
  return (
    <>
    <Texttitle>
    <H3Styled>Project Showcase</H3Styled>

  

    <p>
    At Omegup, we take pride in our web solutions. 
    Explore our featured projects to see the results of our
     collaboration with clients who entrusted us with their web development needs.
    </p>  
    </Texttitle>
      <MainContainer>
                <Container >
                    <Displaycontainer>
                    <Img src="img1.png" alt="Ateliers - 77" />
                    <TextImage style={{borderTopRightRadius:'20px'}} >
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
                        
                      
                    </TextImage></Displaycontainer>
                </Container>

                <Container  >
                <Displaycontainer> <Img src="pc2.png" alt="School Online Tn" />
                    <TextImage>
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
                        
                       
                    </TextImage></Displaycontainer>
                </Container>
                
                <Container style={{borderBottom:'0px'}} >
                    <Displaycontainer>
                    <Img  src="pc3.png" alt="DSF Fr" />
                    <TextImage style={{borderBottomRightRadius:'20px'}}>
                        <H3Styled>DSF Fr</H3Styled>
                        <p style={styles}>Technologies Utilisées :</p>
                        <Container2>
                            <ContainerItem>React</ContainerItem>
                            <ContainerItem>NodeJS</ContainerItem>
                            <ContainerItem>NodeJS</ContainerItem>
                        </Container2>
                        <p style={styles}> DSF Déménagement Services France is your trusted partner for all your moving needs in France. With many years of experience, we provide tailor-made moving solutions for businesses and individuals. </p>
                   
                    <Button bgColor="#FC7557" > View case studies   </Button>
                    
                    
                       
                    </TextImage></Displaycontainer>
                </Container>
            </MainContainer>
            
    </>
  )
}

export default App4;
