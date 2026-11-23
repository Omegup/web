'use client'
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const FormStyled = styled.form`
  position: relative;
  box-sizing: border-box;
  background-color: #FAF9F6;
  border: solid 1px black;
  border-radius: 20px;
  width: min(80%, calc(100% - 32px));
  height: auto;
  margin: 60px auto;
  padding: 36px 6% 28px;
  box-shadow: -8px 8px black;

  @media (max-width: 768px) {
    width: min(92%, calc(100% - 24px));
    padding: 28px 20px 24px;
  }
`;

const PStyled = styled.p`
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 16px;
  margin-bottom: 28px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Title = styled.h1`
  font-family: 'Krona One', sans-serif;
  font-size: 34px;
  font-weight: 400;
  line-height: 37.4px;
  letter-spacing: -6.4%;
  text-align: center;
  margin-top: 8px;
  @media (max-width: 1300px) {
    font-size: 28px;
    line-height: 32px;
    margin-top:20px;
  }
  @media (max-width: 768px) {
    margin-top:0px;
    font-size: 28px;
    line-height: 32px;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: 15px;
  margin: 8px 0 0;
  padding: 8px 12px;
  height: 40px;
  width: 100%;
  border: 1px solid #222325;
`;

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #FAF9F6;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: -0.1em;
  left: 0.75em;
  background: #FAF9F6;
  padding: 0 0.25em;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #222325;
`;

const StyledMessage = styled.textarea`
  box-sizing: border-box;
  border-radius: 15px;
  margin: 0;
  padding: 12px;
  width: 100%;
  min-height: 110px;
  border: 1px solid #222325;
  resize: vertical;
`;

const MessageLabel = styled(StyledLabel)``;

const StyledDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin-bottom: 36px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledButton = styled.button`
  
  border : none;
  
  border : 1px solid #222325;
  background-image: url('src/images/image3.png');
  border : 1px solid #222325;
  background-image: url('src/images/image3.png');
  background-color: #FAF9F6;
  background-repeat: no-repeat;
  background-image:url('/contact.png');
  background-position: left;
  background-position-x: 8%;
  background-size: 20px;
  border:solid 0.5px;
  border-radius: 20px;
  display: block;
  margin: 24px auto 0;
  width: 191px;
  height: 44px;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  transition: box-shadow 0.3s ease, background-image 0.3s ease;
  &:hover {
    box-shadow: -5px 5px black;
    
    background-image:url('/image.png')
  }
  @media only screen and (min-width: 769px) and (max-width:1300px) {
    left: 38%;
}
  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

const InputContainer = styled.div`

margin-top:10px;
  position: relative;
  width: 100%;
  @media (max-width:768px) {
    margin-top:0px;
  }
`;
const Message=styled.div<{success:boolean}>`
color:${(props)=>(props.success? "green" : "red")};

`

const Textbutton = styled.div`

  margin-left : 10px;

`

const ContactUS = () => {
  const [fullname,setFullname]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [mobilephone,setmobilephone]=useState('');
  const [error,setError]=useState([])
  const [success, setSuccess] = useState(false);
   const handelSubmit=async(e:FormEvent)=> {
  
   e.preventDefault();
     const res=await fetch('/api/contact',{
      method:"POST",
      headers:{
        "content-type":"application/json",

      },
      body:JSON.stringify({
        fullname,email,message,mobilephone,
      })
     })
   const { msg, success } = await res.json();
   setError(msg);
   setSuccess(success);
    
   if (success) {
    setFullname("");
    setEmail("");
    setMessage("");
  }
  };

  return (
    <FormStyled onSubmit={e=>handelSubmit(e)} id='contact'>
      <Title >Contact Us - Let&apos;s Start Building Together</Title>
      <PStyled>
        At Omegup, we believe in open communication. Whether you have an inquiry, need a quote,
        or want to discuss a project, we&apos;re here <br />to help. Reach out to us and discover the power of
        web development expertise.
      </PStyled>
      <StyledDiv>
        <InputContainer>
          <StyledInput type='text'onChange={(e)=>setFullname(e.target.value)} placeholder='Your Name' value={fullname} />
          <StyledLabel htmlFor=''>Full Name</StyledLabel>
        </InputContainer>
        <InputContainer>
          <StyledInput onChange={e=>setEmail(e.target.value)} type='email' placeholder='...@gmail.com' value={email} />
          <StyledLabel>E-mail</StyledLabel>
        </InputContainer>
        <InputContainer>
          <StyledInput onChange={e=>setmobilephone(e.target.value)} type='text' placeholder='00 33 212 34 56 78' value={mobilephone}/>
          <StyledLabel>Mobile number</StyledLabel>
        </InputContainer>
      </StyledDiv>
      <InputContainer>
        <StyledMessage onChange={e=>setMessage(e.target.value)} placeholder='your message here !' value={message} />
        <MessageLabel>Message</MessageLabel>
      </InputContainer>
 
      <div>
        {error.map((e, index)=>(
          <Message key={index} success={success}>
            {e}
          </Message>
        ))}
      </div>
      <StyledButton  type='submit'> <p>Get in touch now!</p></StyledButton>
     
    </FormStyled>
  );
};

export default ContactUS;
