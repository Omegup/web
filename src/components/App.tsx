'use client'
import styled from 'styled-components';
<<<<<<< HEAD:src/Page1/App.tsx
import './app1.css';
import { useState } from 'react';
=======
import Link from 'next/link';

>>>>>>> 8c7b32888e166d429ec9c296e7075ac93f779636:src/components/App.tsx


const Title = styled.h1`
   font-family: 'Krona One', sans-serif;
   font-size: 24px;
  font-weight: 400;
  line-height: 26.4px;
  letter-spacing:-6.4%;
  
`

const Container = styled.div<{open:boolean}>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    overflow: hidden;
    max-height: ${props=> (props.open ? '40vh' : '0' )};
    transition: max-height 0.6s ease-in-out;

  }

`;

<<<<<<< HEAD:src/Page1/App.tsx

const Nav = styled.a`
=======
const Nav = styled.p`
>>>>>>> 8c7b32888e166d429ec9c296e7075ac93f779636:src/components/App.tsx
font-family: 'Quicksand', sans-serif;
  text-decoration: none;
  color: black;
  text-align: center;
  border-radius: 20px;
  padding: 15px;
  align-self: center;
  font-size:16px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: aliceblue;
    
    transform: scale(1.1);
    
  }

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
  background-color : #F7F5ED;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: -4px 4px 0px 0px #222325;
    
  }

`;

const Texte = styled.div`
<<<<<<< HEAD:src/Page1/App.tsx
  text-align: center;
  font-size: 30px;
  
=======
margin-top:90px;
 font-family: 'Krona One', sans-serif;
   font-size: 48px;
  font-weight: 400;
  line-height: 52.8px;
  letter-spacing:-6.4%;
  text-align:center;
>>>>>>> 8c7b32888e166d429ec9c296e7075ac93f779636:src/components/App.tsx
  @media (max-width: 768px) {
    font-size: 25px;
  }
margin-bottom:90px;
  @media (max-width: 576px) {
    font-size: 20px;
<<<<<<< HEAD:src/Page1/App.tsx
  }h1{ font-family: 'Krona One', sans-serif;
  font-size: 50px;
 font-weight: 400;
 
 letter-spacing:-6.4%;}
=======
  }

>>>>>>> 8c7b32888e166d429ec9c296e7075ac93f779636:src/components/App.tsx
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

<<<<<<< HEAD:src/Page1/App.tsx
const Buttonnav = styled.button`
  position:absolute;
  top:3%;
  left:3%;
  border:none;
  
  @media (max-width: 765px) {
        margin-left: 70vh;
        z-index: 1;
        position: absolute;
        border: none;
        border-radius: 10px;
        background-color: #222325;
        transition: background-color 0.3s ease-in-out;
        height: 35px;
        width: 35px;
        right: 5%;
        cursor: pointer;
        top: 6.5%;  


        &:hover {
          background-color: #F7F5ED;
        }
        }
`

const Traitbutton = styled.div `
  @media (max-width: 765px) {
    border-bottom: 5px solid #FEC63A;
    border-radius: 10px;
    margin-top: 4px;
    margin-bottom: 4px;
    transition: border-bottom 0.3s ease-in-out;
  }

`

=======
>>>>>>> 8c7b32888e166d429ec9c296e7075ac93f779636:src/components/App.tsx

function NavBar() {
  const [nav,setNav] = useState(false)

  const Handleclick = () => {
    setNav(!nav);
}


  return (
    <Container1>
<<<<<<< HEAD:src/Page1/App.tsx
      <Buttonnav onClick={Handleclick}>
        
          <Traitbutton></Traitbutton>
          <Traitbutton></Traitbutton>
          <Traitbutton></Traitbutton>
          
        </Buttonnav>
      <Affiche>
        <Title>Omegup</Title>
        
       
        
          
        
              
        <Container open={nav}>
          <Nav href='#home'>Home</Nav>
          <Nav href='#about'>About Us</Nav>
          <Nav href='#services'>Services</Nav>
          <Nav href='#references'>References</Nav>
          
        </Container>
        <Button id='button'>Get in Touch</Button>
        

        



          
        
        
        
        
        
=======
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
>>>>>>> 8c7b32888e166d429ec9c296e7075ac93f779636:src/components/App.tsx
      </Affiche>
      <Texte>
        
          Welcome to <Titre1>Omegup</Titre1>:<br />
          Where <Titre2>Imagination</Titre2> meets <Titre3>Code </Titre3>&lt; / &gt;
        
      </Texte>
    </Container1>
  );
}

export default NavBar;


/*<Container>
          <Nav href='#home'>Home</Nav>
          <Nav href='#about'>About Us</Nav>
          <Nav href='#services'>Services</Nav>
          <Nav href='#references'>References</Nav>
        </Container>
        
        <Button id='button'>Get in Touch</Button>*/