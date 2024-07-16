import styled, { createGlobalStyle } from 'styled-components';

const FormStyled = styled.form`
  position: relative;
  background-color: white;
  border: solid 1px black;
  border-radius: 30px;
  width: 80%;
  height: 500px;
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

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const StyledInput = styled.input`
  border-radius: 15px;
  margin: 10px;
  height: 30px;
  width: 90%;

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
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
  background: white;
  padding: 0 0.25em;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #222325;
`;

const StyledMessage = styled(StyledInput)`
  width: 78%;
  height: 70px;
  margin-left: 10.5%; 

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    margin-left: 0;
  }
`;

const MessageLabel = styled(StyledLabel)`
  left: 8%;

  @media (max-width: 768px) {
    left: 1.5%;
  }
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
  background-image: url('src/images/image3.png');
  background-color: #FAF9F6;
  background-repeat: no-repeat;
  background-position: left;
  background-size: 20px;
  border-radius: 20px;
  width: 191px;
  height: 44px;
  position: absolute;
  left: 40%;
  bottom: 30px;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  &:hover {
    box-shadow: -5px 5px black;
    background-image: url('src/images/image2.png');
    transition: box-shadow 0.3s ease, background-image 0.3s ease;
  }

  @media (max-width: 768px) {
    left: calc(50% - 95.5px);
    bottom: 0px;
    position: relative;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ContactUS = () => {
  return (
    <FormStyled>
      <Title>Contact Us - Let's Start Building Together</Title>
      <PStyled>
        At Omegup, we believe in open communication. Whether you have an inquiry, need a quote,
        or want to discuss a project, we're here <br />to help. Reach out to us and discover the power of
        web development expertise.
      </PStyled>
      <StyledDiv>
        <InputContainer>
          <StyledInput type='text' placeholder='Walid Georgy' />
          <StyledLabel>Full Name</StyledLabel>
        </InputContainer>
        <InputContainer>
          <StyledInput type='email' placeholder='WalidGeorgy@Gmail.com' />
          <StyledLabel>E-mail</StyledLabel>
        </InputContainer>
        <InputContainer>
          <StyledInput type='text' placeholder='00 33 212 34 56 78' />
          <StyledLabel>Mobile number</StyledLabel>
        </InputContainer>
      </StyledDiv>
      <InputContainer>
        <StyledMessage type='message' placeholder='your message here !' />
        <MessageLabel>Message</MessageLabel>
      </InputContainer>
      <StyledButton>Get in touch now!</StyledButton>
      <GlobalStyles />
    </FormStyled>
  );
};

export default ContactUS;
