'use client'
import { FormEvent, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const FormStyled = styled.form`
  position: relative;
  background-color: 
  #FAF9F6;
  border: solid 1px black;
  border-radius: 20px;
  width: 80%;
  height: 434px;
  margin-left: 10%;
  margin-top: 60px;
  margin-bottom: 60px;
  box-shadow: -8px 8px black;

  @media (max-width: 768px) {
    width: 90%;
    margin-left: 5%;
    height: auto;
    padding: 20px;
  }
`;

const PStyled = styled.p`
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 5px;
  margin-bottom:20px;
  
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
  margin-top:50px;
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
background-color: #FAF9F6;
border:solid 1px;
  border-radius: 15px;
  margin: 10px;
  height: 30px;
  width: 90%;

  
  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;



const StyledLabel = styled.label`
  position: absolute;
  top: -0.1em;
  left: 0.75em;
  background-color: #FAF9F6;
  padding: 0 0.25em;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #222325;
  
`;

const StyledMessage = styled.textarea`
background-color: #FAF9F6;
margin-top:50px;
border:solid 1px;
  border-radius: 15px;
  margin: 10px;
  width: 77%;
  height:10vh;
  margin-left: 11%;


`;

const MessageLabel = styled(StyledLabel)`
  left: 11.5%;


`;

const StyledDiv = styled.div`
  width: 80%;
  
  margin-left: 10%;
  margin-right: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
   
    width: 80%;
    margin-left: 10%;
    grid-template-columns: 1fr;
  }
`;

const StyledButton = styled.button`
  background-color: #F7F5ED;
  background-repeat: no-repeat;
  background-image:url('contact.png');
  background-position: left;
  background-size: 20px;
  border:solid 0.5px;
  border-radius: 20px;
  margin-left:40%;
  margin-bottom:30px;
  width: 191px;
  height: 44px;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  &:hover {
    box-shadow: -5px 5px black;
    transition: box-shadow 0.3s ease, background-image 0.3s ease;
    background-image:url('image.png')
  }

  @media (max-width: 768px) {
    
    margin-left: calc(50% - 95.5px);
    margin-bottom:10px;
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

const ContactUS = () => {
  const [fullname,setFullname]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [mobilephone,setmobilephone]=useState('');
  const [error,setError]=useState([])
  const [success, setSuccess] = useState(false);
   const handelSubmit=async(e:FormEvent)=> {
  
   e.preventDefault();
     const res=await fetch('api/contact',{
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
 const Img=styled.img`
 position:left;`


 
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
          <StyledInput type='text'onChange={(e)=>setFullname(e.target.value)} placeholder='' value={fullname} />
          <StyledLabel htmlFor=''>Full Name</StyledLabel>
        </InputContainer>
        <InputContainer>
          <StyledInput onChange={e=>setEmail(e.target.value)} type='email' placeholder='...@Gmail.com' value={email} />
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
        {error.map((e)=>(
          <Message success={success}>
            {e}
          </Message>
        ))}
      </div>
      <StyledButton  type='submit'> <p>Get in touch now!</p></StyledButton>
     
    </FormStyled>
  );
};

export default ContactUS;
