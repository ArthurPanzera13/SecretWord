import React from 'react'
import {  DivTitle, StyledTitle, StyledSubTitile, Container } from './style'

const TextosPage1 = () => {
  return (
    <Container>
        <DivTitle>
            <StyledTitle className='teste'>Secret Word</StyledTitle>
        </DivTitle>
        <StyledSubTitile>Clique no botão abaixo para inicar o jogo</StyledSubTitile>
    </Container>
  )
}

export default TextosPage1