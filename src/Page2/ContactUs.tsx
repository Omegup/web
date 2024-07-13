import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const FormStyled=styled.form`
position:relative;
background-color:white;
border:solid 1px;
border-color:black;
border-radius:30px;
width: 80%;
height: 500px;
margin-left:10%;
margin-top:60px;
margin-bottom:60px;
box-shadow:-8px 8px black;
  `
  const PStyled=styled.p`
  text-align: center;
font-size: 20px;
  margin-top:5px;
  
  `
 
  const Title=styled.h1`
 
text-align: center;
 font-size:xx-large;
 `
 const StyledInput=styled.input`

    border-radius:15px;
    margin:10px;
    height: 30px;
    width: 90%;
  
    
 `
 const GlobalStyles=createGlobalStyle`
 body{
    background-color:#F7F5ED;
 }
 `
 const StyledLabel=styled.label`
 
  position: absolute;
  top: -0.1em;
  left: 0.75em;
  background: white;
  padding: 0 0.25em;
  font-size: 1em;
  color: gray;
 `
  const StyledMessage=styled(StyledInput)`
   width: 78%;
   height: 70px;
   margin-left:10.5%;
  `
  const MessageLabel =styled(StyledLabel)`
  left: 8em;
  `
    
  
 const StyledDiv=styled.div`
 width: 80%;
 margin-left:10%;
 margin-right:10%;
 display:grid;
 grid-template-columns:1fr 1fr 1fr  ;
 `
 const StyledButton=styled.button`
 background-image:url('src/images/image3.png');
 background-repeat:no-repeat;
 background-position:left;
 background-size:20px;
 border-radius:20px;
 width: 150px;
 height: 40px;
 position: absolute;
left: 40%;
bottom: 30px;
&:hover{
    box-shadow:-5px 5px black;
    background-image:url('src/images/image2.png');
    transition:box-shadow 0.3s ease,background-image 0.3s ease;
}


 `
 const InputContainer=styled.div`
  position: relative;
  width: 100%;`
 
const ContactUS = () => {
  return (
    <FormStyled>
        <Title>Contact Us - Let's Start Building Together</Title>
        <PStyled>At Omegup, we believe in open communication. 
            Whether you have an inquiry, need a quote,
             or want to discuss a project, we're here <br />to help.
              Reach out to us and discover the power of 
              web development expertise.</PStyled>
     <StyledDiv>
        
<InputContainer><StyledInput type='text' placeholder='Walid Georgy'/>  <StyledLabel>Full Name</StyledLabel> </InputContainer>  
<InputContainer><StyledInput type='email' placeholder='WalidGeorgy@Gmail.com'/><StyledLabel>E-mail</StyledLabel></InputContainer>
<InputContainer><StyledInput type='text'placeholder='00 33 212 34 56 78'/><StyledLabel>Mobile number</StyledLabel></InputContainer>
     </StyledDiv>  
     < InputContainer>
     <StyledMessage type='message' placeholder='your message here !'/>  <MessageLabel>Message</MessageLabel> </InputContainer>
     <StyledButton> Get in touch now !</StyledButton>
     <GlobalStyles></GlobalStyles>
    </FormStyled>
    
  )
}

export default ContactUS
