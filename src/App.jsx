//CSS
import './App.css';
//Paginas
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

//Hooks
import { useState } from 'react';

//Palavras
import ListaDePalavras from './data/palavras'

const stage = [
  {id: 1, name: "Start"},
  {id: 2, name: "InGame"},
  {id: 3, name: "EndGame"}
]

function App() {

  const [gameStage, SetGameStage] = useState(stage[0].name);
  const [palavras] = useState(ListaDePalavras)
  const [palavraEscolhida, setpalavraEscolhida] = useState("");
  const [categoriaEscolhida, setcategoriaEscolhida] = useState("");
  const [pontuacao, setPontuacao] = useState(0);

  const atualizarPontuacao = (novaPontuacao) => {
    setPontuacao(novaPontuacao);
  };

  const escolhePalavraCategoria = () => {
    const categorias = Object.keys(palavras);
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)];
    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)];

    setpalavraEscolhida(palavra);
    setcategoriaEscolhida(categoria);

    return {palavra, categoria};
  }
  
  const startGame = () => {

    const {palavra, categoria} = escolhePalavraCategoria();

    var letraPalavra = palavra.split("")
    
    letraPalavra = letraPalavra.map((letras) => letras.toLowerCase())

    setpalavraEscolhida(palavra); // Defina a palavra escolhida
    setcategoriaEscolhida(categoria); //Define a categoria escolhida
    SetGameStage(stage[1].name);
  }

  const FinishGame = () => {

    SetGameStage(stage[2].name);
  }



  const OtherGame = () => {
    SetGameStage(stage[0].name);
  }

  return (
    <div className="App">
      {gameStage === "Start" && <Page1 startGame = {startGame}/>}
      {gameStage === "InGame" && <Page2 atualizarPontuacao = {atualizarPontuacao} FinishGame = {FinishGame} escolhePalavraCategoria = {escolhePalavraCategoria} palavraEscolhida={palavraEscolhida} categoriaEscolhida = {categoriaEscolhida}/>}
      {gameStage === "EndGame" && <Page3  pontuacao = {pontuacao} OtherGame = {OtherGame}/>}
    </div>
  );
}

export default App;
