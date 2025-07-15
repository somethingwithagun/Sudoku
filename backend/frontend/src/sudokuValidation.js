
function validateBox(grid, index, value) {
    const col = index % 9;
    const row = Math.floor(index / 9);
    const firstRowInBox = row - row%3;
    const firstColInBox = col - col%3;

    for(let i = firstRowInBox; i < firstRowInBox + 3; i++) {
        for(let j = firstColInBox; j < firstColInBox + 3; j++)
            if(grid[i*9 + j] === value && i*9 + j !== index) return false;
    }
    return true;
}

function validateRow(grid, index, value) {
    const rowStart = Math.floor(index / 9) * 9;
    for(let i = rowStart; i < rowStart + 9; i++)
        if(grid[i] === value && i !== index) return false;
    return true;
}

export function validate(grid, index, value) {
    return validateColumn(grid, index, value) 
        && validateRow(grid, index, value)
        && validateBox(grid, index, value);
}

export function validateAll(grid) {
    for(let i = 0; i < grid.length; i++)
        if(!validate(grid, i, grid[i]))
            return false;
    return true;
}

function validateColumn(grid, index, value) {
    const colStart = index % 9;
    for(let i = colStart; i < grid.length; i+=9)
        if(grid[i] === value && i !== index) return false;
    return true;
}

export function getInvalidDigitsIndices(grid, index, value) {
    let res = Array(grid.length).fill(false);
    getInvalidDigitsIndicesBox(grid, index, value,res);
    getInvalidDigitsIndicesCol(grid, index, value,res);
    getInvalidDigitsIndicesRow(grid, index, value,res);
    return res;
}

function getInvalidDigitsIndicesRow(grid, index, value, res) {
    const rowStart = Math.floor(index / 9) * 9;
    for(let i = rowStart; i < rowStart + 9; i++)
        if(grid[i] === value) res[i] = true;
    return;
}
function getInvalidDigitsIndicesCol(grid, index, value, res) {
    const colStart = index % 9;
    for(let i = colStart; i < grid.length; i+=9)
        if(grid[i] === value)  res[i] = true;
    return;
}
function getInvalidDigitsIndicesBox(grid, index, value, res) {
    const col = index % 9;
    const row = Math.floor(index / 9);
    const firstRowInBox = row - row%3;
    const firstColInBox = col - col%3;

    for(let i = firstRowInBox; i < firstRowInBox + 3; i++) {
        for(let j = firstColInBox; j < firstColInBox + 3; j++)
            if(grid[i*9 + j] === value) res[i*9 + j] = true;
    }

    return;
}

