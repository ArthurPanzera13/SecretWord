import React from 'react'
import TextosPage1 from './TextosPage1'
import {  Container, StyledButton } from './style'

const Page1 = ({startGame}) => {
  return (
    <Container>
        <TextosPage1/>
        <StyledButton onClick={startGame}>Iniciar Rodada</StyledButton>
    </Container>
  )
}

export default Page1