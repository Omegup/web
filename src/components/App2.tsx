"use client"
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  background: #22232508;
  margin-top: 10px;
  height:50%;
  border-bottom: 0.5px solid #999999;
`;

const Container2 = styled.div`
width: 80%;
margin-left:10%;
height: 49.5%;

  display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;


  @media (max-width: 1700px) {
    margin-left:20%;
    width: 70%;
   display: grid;

    grid-template-columns: 2fr 2fr ;
  }

  @media (max-width: 900px) {
    margin-left:10%;
    width: 80%;
    display: flex;
    flex-wrap: wrap; 
  }
  @media (max-width: 760px) {
    margin-left:25%;
  }
`;
const BoxTitle=styled.h3`
   color: #222325;
  font-family: 'Krona One', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing:-6.4%;
  `
const Box = styled.div<{ shadowColor: string }>`
background: #FAF9F6;
width: 286.5px;

border: 1px solid;
border-radius: 30px;
padding: 20px;
align-self: flex-start;

box-shadow: ${props => props.shadowColor ? props.shadowColor : 'none'};
  margin: 2% 0.5%; 
  gap: 10px;
  @media (max-width: 1300px) {
    
   
  }
  @media (max-width: 1000px) {
    margin: 2% 1%;
  }
  @media (max-width: 768px) {
    margin: 2% 3%;
  }
`;

const Text = styled.p`
 font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
`;

const Button = styled.span<{ secondary: string }>`
 font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  background: ${props => props.secondary === 'true' ? '#FEC63A' : '#FAF9F6'};
  border: 0.5px solid;
  border-radius: 30px;
  padding: 7px;
  margin: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-out;
  &:hover {
    box-shadow: -4px 4px 0px 0px #222325;
    
  }

 
`;

const Text1 = styled.div`
 font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  text-align: center;
  
`;

const StyledDiv = styled.div`
  margin-top: 20px;
  line-height:24px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 576px) {
    flex-direction: column; 
  }
`;
const Texte = styled.div`
margin-top:90px;
 font-family: 'Krona One', sans-serif;
   font-size: 48px;
  font-weight: 400;
  line-height: 52.8px;
  letter-spacing:-6.4%;
  text-align:center;
  @media (max-width: 768px) {
    font-size: 25px;
  }
margin-bottom:90px;
  @media (max-width: 576px) {
    font-size: 20px;
  }

`;

const Titre1 = styled.span`
  color: #fc7557;

  font-family: 'Krona One', sans-serif;
   
`;

const Titre2 = styled.span`
  color: #fec63a;
  font-family: 'Krona One', sans-serif;
`;

const Titre3 = styled.span`
  color: #64c67e;
  font-family: 'Krona One', sans-serif;
`;

const Acceuil = () => {
  return (
    <>
        <Texte>
        
        Welcome to <Titre1>Omegup</Titre1>:<br />
        Where <Titre2>Imagination</Titre2> meets <Titre3>Code </Titre3>&lt; / &gt;
      
    </Texte>
    <Container>
  
      <Container2>
        <Box shadowColor="-8px 8px 0px 0px #FEC63A">
          <BoxTitle>💡 Innovate & <br />Create :</BoxTitle>
          <Text>Our team of tech visionaries <br />thrives on innovation, crafting<br /> cutting-edge websites that lead <br /> the way in your industry.</Text>
        </Box>

        <Box shadowColor="-8px 8px 0px 0px #FC7557">
          <BoxTitle>🤝 Partners in <br />Success :</BoxTitle>
          <Text>Your success is our mission. We <br /> collaborate closely with you, <br /> ensuring our solutions align <br /> perfectly with your goals</Text>
        </Box>

        <Box shadowColor="-8px 8px 0px 0px #949CFF">
          <BoxTitle>🚀 Code that <br />Performs :</BoxTitle>
          <Text>Behind every stunning website <br /> and mobile app lies impeccable <br /> code. We engineer seamless <br /> experiences that set you apart.</Text>
        </Box>

        <Box shadowColor="-8px 8px 0px 0px #64C67E">
          <BoxTitle>🎨 Design <br />Brilliance :</BoxTitle>
          <Text>Our UX/UI designs aren&apos;t just <br /> visually stunning: they&apos;re user-<br /> centric masterpieces that <br /> captivate your audience.</Text>
        </Box>
      </Container2>

      <Text1>At Omegup, we are the architects of your digital dreams. We blend creativity, technology, and <br />
        expertise to deliver awe-inspiring web solutions that redefine the online landscape.

        <StyledDiv>
          <Button secondary='false'> <Link href={'#contact'}>Get in touch</Link></Button>
          <Button secondary='true'> <Link href={'#services'}>Explore Our Services</Link></Button>
        </StyledDiv>
      </Text1>
    </Container></>
  );
};

export default Acceuil;
