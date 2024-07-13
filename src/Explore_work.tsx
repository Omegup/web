
import styled from 'styled-components'
import Reference from './reference'

const Explore_work = () => {
    const Title1=styled.h2`
         margin-top:200px;
    `
const Container=styled.div`
    background-color:white;
    margin-top:10px;
  
    width: 80%;
    height: 350px;
    border:solid 2px;
    border-color:black;
    box-shadow:5px  5px 5px yellow;
    margin-left:10%;
    border-radius:20px;
    `

  return (
    <div>
        <Title1>
            Explore Our Work
        </Title1>
        <p>At Omegup, we take pride in the work we do for our clients. Our dedicated team of talented web developers has created innovative solutions for a wide range <br />
        of businesses. Here's an overview of some of our recent references:</p>
      
      <Container>
        <Reference>
        </Reference>
        </Container>
    </div>
  )
}

export default Explore_work
