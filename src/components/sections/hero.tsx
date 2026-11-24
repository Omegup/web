"use client"
import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '@/components/colors';

const Container = styled.div`
  background: linear-gradient(0deg, rgba(34, 35, 37, 0.03), transparent);
  margin-top: 10px;
  height:50%;
  border-bottom: 0.5px solid #999999;
`;

const Container2 = styled.div`
  box-sizing: border-box;
  width: min(1240px, calc(100% - 48px));
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 28px;

  @media (max-width: 1270px) {
    width: min(680px, calc(100% - 32px));
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    width: min(360px, calc(100% - 24px));
    grid-template-columns: minmax(0, 1fr);
  }
`;
const BoxTitle=styled.h3`
   color: #222325;
  font-family: 'Krona One', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing:-6.4%;
  margin: 0 0 12px;
  `
const Box = styled.div<{ shadowColor: string }>`
background: #FAF9F6;
box-sizing: border-box;
width: 100%;
margin: 0;
border: 1px solid;
border-radius: 30px;
padding: 20px;
align-self: flex-start;

box-shadow: ${props => props.shadowColor ? props.shadowColor : 'none'};
`;

const Text = styled.p`
 font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    margin: 0;
`;

const Button = styled.span<{ secondary: string }>`
 font-family: 'Quicksand', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  background: ${props => props.secondary === 'true' ? colors[0] : '#FAF9F6'};
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
 margin-top: 36px;
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
  margin-top: 90px;
  margin-bottom: 90px;
  padding-inline: 16px;
  box-sizing: border-box;
  font-family: 'Krona One', sans-serif;
  font-size: clamp(28px, 4.4vw, 48px);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.064em;
  text-align: center;
`;

const Titre1 = styled.span`
  color: ${colors[1]};

  font-family: 'Krona One', sans-serif;
   
`;

const Titre2 = styled.span`
  color: ${colors[0]};
  font-family: 'Krona One', sans-serif;
`;

const Titre3 = styled.span`
  color: ${colors[3]};
  font-family: 'Krona One', sans-serif;
`;

const CodeMark = styled.span`
  white-space: nowrap;
`;

const Acceuil = () => {
  return (
    <>
        <Texte id="home">
        
        Welcome to <Titre1>Omegup</Titre1>:<br />
        Where <Titre2>Imagination</Titre2> meets <Titre3>Code</Titre3> <CodeMark>&lt;/&gt;</CodeMark>
      
    </Texte>
    <Container>
  
      <Container2>
        <Box shadowColor={`-8px 8px 0px 0px ${colors[0]}`}>
          <BoxTitle>💡 Innovate & <br />Create :</BoxTitle>
          <Text>Our team of tech visionaries <br />thrives on innovation, crafting<br /> cutting-edge websites that lead <br /> the way in your industry.</Text>
        </Box>

        <Box shadowColor={`-8px 8px 0px 0px ${colors[1]}`}>
          <BoxTitle>🎨 Design <br />Brilliance :</BoxTitle>
          <Text>Our UX/UI designs aren&apos;t just <br /> visually stunning: they&apos;re user-<br /> centric masterpieces that <br /> captivate your audience.</Text>
        </Box>

        <Box shadowColor={`-8px 8px 0px 0px ${colors[2]}`}>
          <BoxTitle>🚀 Code that <br />Performs :</BoxTitle>
          <Text>Behind every stunning website <br /> and mobile app lies impeccable <br /> code. We engineer seamless <br /> experiences that set you apart.</Text>
        </Box>

        <Box shadowColor={`-8px 8px 0px 0px ${colors[3]}`}>
          <BoxTitle>🤝 Partners in <br />Success :</BoxTitle>
          <Text>Your success is our mission. We <br /> collaborate closely with you, <br /> ensuring our solutions align <br /> perfectly with your goals</Text>
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
