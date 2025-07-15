import { validate } from "./sudokuValidation";

export function generateSudoku() {
    const sudoku = createEmptyGrid();
    resolveSudoku(sudoku);
    return removeCells(sudoku);
}

function createEmptyGrid() {
    return new Array(81).fill(null);
}

function resolveSudoku(grid) {
    const emptyCell = findEmptyCell(grid);
    if(emptyCell === null) return true;
    
    const numbers = getRandomNumbers();
    
    // backtracking bruteforce
    for(let i = 0; i < numbers.length; i++) {
        if(!validate(grid, emptyCell, numbers[i])) continue;

        grid[emptyCell] = numbers[i];
        
        if(resolveSudoku(grid)) return true;

        grid[emptyCell] = null;
    }
}


export function findEmptyCell(grid) {
    for(let i = 0; i < 81; i++) {
        if(grid[i] === null) return i;
    }
    return null;
}

function getRandomNumbers() {
    const numbers = [1,2,3,4,5,6,7,8,9];
    for(let i = numbers.length -1; i >=0; i--) {
        const randIndex = Math.floor(Math.random() * (i+1));
        [numbers[i], numbers[randIndex]] = [numbers[randIndex], numbers[i]];
    }
    return numbers;
} 

function removeCells(grid) {
    const DIFFICULTY = 15;
    const resultGrid = grid.slice();

    let x = 0;
    while(x < DIFFICULTY) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if(resultGrid[row*9 + col] !== null) {
            resultGrid[row*9 + col] = null;
            x++;
        }
    }
    return resultGrid;
} 