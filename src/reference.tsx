import React, { useState } from 'react'
import RefererenceStyled from './reference.styled'
import styled from 'styled-components'
const Tech=styled.h1`
width:30px;
height:20px;
background-color: red;
`
var Tab1=['HTML5','CSS3','React','NodeJs','Tailwind'];
var Tab2=[];
Tab2=['React','NextJs','NodeJs','MongoDB'];
var Tab3=[];
Tab3=['React','NextJs','NodeJs'];
const Img=styled.img`
width: 50%;
margin: ;
`
const Reference = () => {
    const [Tab,setTab]=useState(Tab1);

  return (
    <RefererenceStyled>
     <Img src="" alt="" />

    </RefererenceStyled>

  )
}

export default Reference;
