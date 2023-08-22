import React from 'react'
import { StyledSmallText, Container, StyledEndTitle } from './style'

const TextosPage3 = ({points}) => {
  return (
    <Container>
        <StyledEndTitle>Fim de Jogo!</StyledEndTitle>
        <StyledSmallText>Sua pontuação final foi de: {points} pontos!</StyledSmallText>
    </Container>
  )
}

export default TextosPage3