import React from 'react'
import TextosPage3 from './TextosPage3'
import { Container, StyledButton } from './style'

const Page3 = ({OtherGame, pontuacao}) => {
  return (
    <Container>
        <TextosPage3 points = {pontuacao}/>
        <StyledButton onClick={OtherGame}>Reiniciar</StyledButton>
    </Container>
  )
}

export default Page3