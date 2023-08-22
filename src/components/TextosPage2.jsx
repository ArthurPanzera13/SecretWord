import React from 'react'
import { StyledDica, Container, StyledSmallText, StyledTitle } from './style'

const TextosPage2 = ({categoria, pontuacao, trynumber}) => {
  return (
    <Container>
        <StyledSmallText>Sua Pontuação Atual: {pontuacao}</StyledSmallText>
        <StyledTitle>Adivinhe a Palavra:</StyledTitle>
        <StyledSmallText>Dica sobre a palavra: <StyledDica>{categoria.toUpperCase()}</StyledDica></StyledSmallText>
        <p>Você tem <StyledDica>{trynumber}</StyledDica> tentativa(s)!!!</p>
    </Container>
  )
}

export default TextosPage2