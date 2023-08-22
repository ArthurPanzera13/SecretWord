import React, { useState, useEffect } from 'react'; 
import { StyledLetras, StyledSmallText, StyledDivSpan, StyledDiv, StyledInput, StyledButton, Container } from './style';
import TextosPage2 from './TextosPage2';
import Letter from './Letter';

const Page2 = ({ atualizarPontuacao, escolhePalavraCategoria,FinishGame, palavraEscolhida, categoriaEscolhida }) => {
  const [acceptedList, setAcceptedList] = useState([]);
  const [currentLetter, setCurrentLetter] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(5); 
  const [points, setPoints] = useState(0);
  const [wordGuessed, setWordGuessed] = useState(false);

  useEffect(() => {
    setRemainingAttempts(remainingAttempts);
  
    if (remainingAttempts === 0) {
      FinishGame();
    }
  
    const allLettersGuessed = Array.from(palavraEscolhida).every(letter => acceptedList.includes(letter));
    if (allLettersGuessed) {
      setWordGuessed(true);
      setPoints(points + 100);
      setAcceptedList(['']);
      atualizarPontuacao(points + 100);
      escolhePalavraCategoria();
    }

  }, [remainingAttempts, palavraEscolhida, acceptedList, FinishGame]);
  

  const insertLetter = () => {
    if (!acceptedList.includes(currentLetter)) {
      if (!palavraEscolhida.includes(currentLetter)) {
        setRemainingAttempts(remainingAttempts - 1); 
      }if (wordGuessed) {
        setWordGuessed(false);
      }
      setAcceptedList([...acceptedList, currentLetter]);
    }
  
    setCurrentLetter('');
  };

  return (
    
    <Container>
      <TextosPage2 categoria={categoriaEscolhida} pontuacao={points} trynumber={remainingAttempts} />
      <StyledDivSpan>
        {Array.from(palavraEscolhida).map((letter, index) => (
          <Letter key={index} letter={letter} acceptedList={acceptedList} />
        ))}
      </StyledDivSpan>
      <StyledDiv>
        <StyledInput onChange={(e) => setCurrentLetter(e.target.value.toLowerCase())} value={currentLetter} type="text" maxLength={1} />
        <StyledButton onClick={insertLetter}>Inserir Letra</StyledButton>
      </StyledDiv>
      <StyledSmallText>Letras já utilizadas</StyledSmallText>
      <div>
        <StyledSmallText>
          {acceptedList.map((lista, index) => (
            <StyledLetras key={index}>{lista.toUpperCase() + ' - '}</StyledLetras>
          ))}
        </StyledSmallText>
      </div>
    </Container>
  );
};

export default Page2;
