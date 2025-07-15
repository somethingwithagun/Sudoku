import SudokuBoard from "./components/SudokuBoard"
import Keyboard from "./components/Keyboard"
import Timer from "./components/Timer"
import { generateSudoku, findEmptyCell } from "./sudokuGenerator";
import { getInvalidDigitsIndices, validate, validateAll} from "./sudokuValidation";
import { useState } from 'react';
import {axios} from 'axios'
import './App.css'


const initialSquares = generateSudoku();
const volatileSquares = [];
for(let i = 0; i < initialSquares.length; i++)
  volatileSquares.push( initialSquares[i] !== null ? true : false);

function App() {
  const [squares, setSquares] = useState(initialSquares);
  const [markedSquares, setMarkedSquares] = useState(Array(squares.length).fill(false));
  const [active, setActive] = useState(null);
  const [isGameOver,setIsGameOver] = useState(false);

  function handleDigitPress(digit) {
    if(active !== null && !volatileSquares[active]) {
      if(validate(squares, active, digit)){
        const nextSquares = squares.slice();
        nextSquares[active] = digit;
        setSquares(nextSquares);
        setMarkedSquares(Array(squares.length).fill(false));

        if(!findEmptyCell(nextSquares) && validateAll(nextSquares))
          setIsGameOver(true);

      } else {
        let squaresToMark = getInvalidDigitsIndices(squares, active, digit);
        setMarkedSquares(squaresToMark);
      }
    }
  }

  function handleErasePress() {
    if(active && !volatileSquares[active]) {
        const nextSquares = squares.slice();
        nextSquares[active] = null;
        setSquares(nextSquares);
        setMarkedSquares(Array(squares.length).fill(false));
    }
  }

  function handleSquarePress(index) {
    setMarkedSquares(Array(squares.length).fill(false));
    setActive(index);
  } 

  return (
    <>
      <Timer gameOver={isGameOver}/>
      <SudokuBoard squares={squares} active={active} onSetActive={handleSquarePress}
                    markedSquares={markedSquares}/>

      <Keyboard onDigitPress={handleDigitPress}
                onErasePress={handleErasePress}/>
      <p className="session-id">session id: 1asdasd2fgs22ewf</p>
    </>
  )
}

export default App;
