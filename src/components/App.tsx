'use client'
import styled from 'styled-components';
import Link from 'next/link';



const Title = styled.h1`
   font-family: 'Krona One', sans-serif;
   font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing:-6.4%;
  
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;


  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Nav = styled.p`
font-family: 'Quicksand', sans-serif;
  text-decoration: none;
  color: black;
  text-align: center;
  border-radius: 20px;
  padding: 15px;
  align-self: center;
  font-size:16px;



  @media (max-width: 576px) {
    padding: 10px;
  }
`;

const Container1 = styled.div`
  height: 100%;
  background-color:  #FAF9F6;
`;

const Affiche = styled.div`
  height: 50px;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

const Button = styled.button`
  display: inline;
  font-size: 15px;
  border: 0.5px solid;
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    box-shadow: -4px 4px 0px 0px #222325;
    transition: 0.3s ease-in-out;
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


function NavBar() {
  return (
    <Container1>
      <Affiche>
        <Title>Omegup</Title>
        <Container>
          <Link href="#home">
            <Nav>Home</Nav>
          </Link>
          <Link href="#about"  >
            <Nav>About Us</Nav>
          </Link>
          <Link href="#services" >
            <Nav>Services</Nav>
          </Link>
          <Link href="#references" >
            <Nav>References</Nav>
          </Link>
        </Container>
        <Button ><Link href={'#contact'}>
          Get in Touch</Link></Button>
      </Affiche>
      <Texte>
        
          Welcome to <Titre1>Omegup</Titre1>:<br />
          Where <Titre2>Imagination</Titre2> meets <Titre3>Code </Titre3>&lt; / &gt;
        
      </Texte>
    </Container1>
  );
}

export default NavBar;
