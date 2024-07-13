import React from 'react';
import styled from 'styled-components';
const Title = styled.h1`
  position: sticky;
  display: inline;
  float: left;
  font-size: 30px;
  font-weight: bold;
`;
const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`
const Nav = styled.a`
  text-decoration: none;
  position: sticky;
  color:black;
  text-align: center;
  border-radius: 20px;
  padding: 15px;
  align-self: center;
  &:hover {
    color: aliceblue;
    background-color: #222325;
    transform: scale(1.15); /* Adjusted scale value */
    transition: 0.3s ease-in-out;
  }
`;

const Container1 = styled.div`
  height: 100%;
  margin-top: 10px;
`;

const Affiche = styled.div`
  height: 80px;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px; /* Reduced height from 80px to 50px */
  width: 100%;
  background-color: #FEC63A;
  border-radius: 20px;
`;

const Button = styled.button`
  display: inline;
  float: right;
  font-size: 15px;
  border: 0.5px solid;
  border-radius: 30px;
  padding: 5px;
  cursor: pointer; /* Added cursor pointer */
  &:hover {
    box-shadow: -4px 4px 0px 0px #222325;
    transition: 0.3s ease-in-out;
  }
`;

const Texte = styled.div`
  text-align: center;
  font-size: 30px;
`;

const Titre1 = styled.span`
  color: #FC7557;
`;

const Titre2 = styled.span`
  color: #FEC63A;
`;

const Titre3 = styled.span`
  color: #64C67E;
`;

function NavBar() {
  return (
    <Container1>
      <Affiche>
        <Title>Omegup</Title>
        <Container>
        <Nav href='#home'>Home</Nav>
        <Nav href='#about'>About Us</Nav>
        <Nav href='#services'>Services</Nav>
        <Nav href='#references'>References</Nav>
        </Container>
        <Button id='button'>Get in Touch</Button>
      </Affiche>
      <Texte className='texte'>
        <h1>Welcome to <Titre1>Omegup</Titre1>:<br/>Where <Titre2>Imagination</Titre2> meets <Titre3>Code </Titre3>&lt; / &gt;</h1>
      </Texte>
    </Container1>
  );
}

export default NavBar;
