import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    background: #22232508;
    margin-top: 10px;
    height: 100%;
    border-bottom: 0.5px solid #999999;
`;
const Container2 = styled.div`
display:flex;

flex-direction:row;
`


const Box = styled.div<{shadowColor:string}>`
    background: #FAF9F6;
    width: 33%;
    border: 0.5px solid;
    border-radius: 30px;
    padding: 0 3vh;
    align-self: flex-start;
    margin: 4vh 5vh 0 3vh;
    box-shadow: ${props => props.shadowColor ? props.shadowColor : 'none'};
`;

const Text = styled.p`
    font-size: 20px;
`;

const Button = styled.span<{secondary:string}>`
    background: ${props => props.secondary==='true' ? '#FEC63A' : '#FAF9F6'};
    border: 0.5px solid;
    border-radius: 30px;
    padding: 7px;
    margin: 10px;
    cursor: pointer;
    
    &:hover {
        box-shadow: -4px 4px 0px 0px #222325;
        transition: 0.3s ease-out;
    }
`;
const Text1 = styled.p`
    margin-top: 8vh;
    display: block;
    text-align: center;
`;
const StyledDiv = styled.div`
margin-top:20px;`

const Acceuil = () => {
    return (
        <Container>
            <Container2 >
                <Box shadowColor="-8px 8px 0px 0px #FEC63A">
                    <h3>💡 Innovate & <br/>Create :</h3>
                    <Text>Our team of tech visionaries <br />thrives on innovation, crafting<br /> cutting-edge websites that lead <br/> the way in your industry.</Text>
                </Box>

                <Box shadowColor="-8px 8px 0px 0px #FC7557">
                    <h3>🤝 Partners in <br/>Success :</h3>
                    <Text>Your success is our mission. We <br/> collaborate closely with you, <br/> ensuring our solutions align <br/> perfectly with your goals</Text>
                </Box>

                <Box shadowColor="-8px 8px 0px 0px #949CFF">
                    <h3>🚀 Code that <br/>Performs :</h3>
                    <Text>Behind every stunning website <br/> and mobile app lies impeccable <br/> code. We engineer seamless <br/> experiences that set you apart.</Text>
                </Box>

                <Box shadowColor="-8px 8px 0px 0px #64C67E">
                    <h3>🎨 Design <br/>Brilliance :</h3>
                    <Text>Our UX/UI designs aren't just <br/> visually stunning: they're user-<br/> centric masterpieces that <br/> captivate your audience.</Text>
                </Box>
            </Container2>

            <Text1>At Omegup, we are the architects of your digital dreams. We blend creativity, technology, and <br/>
            expertise to deliver awe-inspiring web solutions that redefine the online landscape.

             <StyledDiv>
                <Button secondary='false'>Get in touch</Button>
               <Button secondary='true'>Explore Our Services</Button>
               </StyledDiv>  </Text1>
        </Container>
    );
};

export default Acceuil;
