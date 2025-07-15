import '../SudokuBoard.css'

function Square({value, isActive, isEven, onSquareClick, isMarked, borderClass}) {
  return <button 
          className={`square${isActive?" active":""}
                    ${isEven?" even":" odd"}${borderClass?" " + borderClass:""}
                    ${isMarked?" marked":""}`}
          onClick={onSquareClick}>{value}</button>
}


export default function SudokuBoard({squares, active, onSetActive,
                                        markedSquares}) { 
  function handleClick(i) {
    onSetActive(i);
  }
  const board = [];
  for(let i = 0; i < 9; i++){
    const isTriplet = ((i+1)%3 === 0) && i != 8;
    board.push(
      <div key={i} className="board-row"> 
        <Square value={squares[0+(i*9)]} 
                isActive={active === 0+(i*9)} 
                isEven={(0 === i%2)}
                onSquareClick={() => handleClick(0+(i*9))}
                isMarked={markedSquares[0+(i*9)]}
                borderClass={`${isTriplet?"border-bottom":""}`} />

        <Square value={squares[1+(i*9)]} 
                isActive={active === 1+(i*9)} 
                isEven={(1 === i%2)} 
                onSquareClick={() => handleClick(1+(i*9))}
                isMarked={markedSquares[1+(i*9)]}
                borderClass={`${isTriplet?"border-bottom":""}`} />

        <Square value={squares[2+(i*9)]} 
                isActive={active === 2+(i*9)} 
                isEven={(0 === i%2)} 
                onSquareClick={() => handleClick(2+(i*9))}
                isMarked={markedSquares[2+(i*9)]}
                borderClass={`${isTriplet?"border-bottom":""} border-right`} />

        <Square value={squares[3+(i*9)]} 
                isActive={active === 3+(i*9)} 
                isEven={(1 === i%2)} 
                onSquareClick={() => handleClick(3+(i*9))}
                isMarked={markedSquares[3+(i*9)]}
                borderClass={`${isTriplet?"border-bottom":""}`} />

        <Square value={squares[4+(i*9)]} 
                isActive={active === 4+(i*9)} 
                isEven={(0 === i%2)} 
                onSquareClick={() => handleClick(4+(i*9))}
                isMarked={markedSquares[4+(i*9)]}
                borderClass={`${isTriplet?"border-bottom":""}`} />

        <Square value={squares[5+(i*9)]} 
                isActive={active === 5+(i*9)} 
                isEven={(1 === i%2)} 
                onSquareClick={() => handleClick(5+(i*9))}
                isMarked={markedSquares[5+(i*9)]}
                borderClass={`${isTriplet?"border-bottom":""} border-right`} />

        <Square value={squares[6+(i*9)]} 
                isActive={active === 6+(i*9)} 
                isEven={(0 === i%2)} 
                onSquareClick={() => handleClick(6+(i*9))}
                isMarked={markedSquares[6+(i*9)]}
                borderClass={`${isTriplet?"border-bottom":""}`} />

        <Square value={squares[7+(i*9)]} 
                isActive={active === 7+(i*9)} 
                isEven={(1 === i%2)} 
                onSquareClick={() => handleClick(7+(i*9))}
                isMarked={markedSquares[7+(i*9)]}
                borderClass={`${isTriplet?"border-bottom":""}`} />

        <Square value={squares[8+(i*9)]} 
                isActive={active === 8+(i*9)} 
                isEven={(0 === i%2)} 
                onSquareClick={() => handleClick(8+(i*9))}
                isMarked={markedSquares[8+(i*9)]}
                borderClass={`${isTriplet?"border-bottom":""}`} />

      </div>
    );
  }

  return (
    <div className="board">
      {board}
    </div>
  );
}