
import styled from 'styled-components';

const Container = styled.div`
  background: #22232508;
  margin-top: 10px;
  height: 100%;
  border-bottom: 0.5px solid #999999;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction : row;
  flex-wrap : no wrap;
  justify-content: center;

  @media (max-width: 1200px) {
    display : grid;
    grid-template-columns: auto auto;
  }

  @media (max-width: 900px) {
    margin-left:15%;
    display: grid;
    grid-template-columns: auto;
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
  background: #faf9f6;
  width: 40%;
  height:30vh;
  border: 0.5px solid;
  
  border-radius: 30px;
  padding: 0 3vh;
  align-self: flex-start;
  margin: 4vh 5vh 0 3vh;
  box-shadow: ${props => props.shadowColor ? props.shadowColor : 'none'};
    width: 45%;
    margin: 2vh 3vh; 

    @media (max-width: 1400px) {
      height : 40vh;
    }

    @media (max-width: 1200px) {
      height : 55vh;
    }

    @media (max-width: 900px) {
      height: 50vh;
    }

    @media (max-width: 300px) {
      height: 80vh;
      
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

const Text1 = styled.p`
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

const Acceuil = () => {
  return (
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
          <Text>Our UX/UI designs aren't just <br /> visually stunning: they're user-<br /> centric masterpieces that <br /> captivate your audience.</Text>
        </Box>
      </Container2>

      <Text1>At Omegup, we are the architects of your digital dreams. We blend creativity, technology, and <br />
        expertise to deliver awe-inspiring web solutions that redefine the online landscape.

        <StyledDiv>
          <Button secondary='false'>Get in touch</Button>
          <Button secondary='true'>Explore Our Services</Button>
        </StyledDiv>
      </Text1>
    </Container>
  );
};

export default Acceuil;
