
function getAdjacentPositions(row,col,matrix) {
  let adjacentPositions = [];
  
  const adjacentCells = [
    [0,1],
    [1,0],
    [-1,0],
    [0,-1]
  ]
  for(let [cellRow, cellCol] of adjacentCells){
    const adjacentRow = cellRow + row;
    const adjacentCol = cellCol + col;

    if(adjacentRow >= 0 && 
      adjacentRow < matrix.length && 
      adjacentCol >=0 && 
      adjacentCol < matrix[0].length)
      {
        adjacentPositions.push([adjacentRow, adjacentCol]);
      }
  }
  return adjacentPositions;
}

function getAllPositiveNumbers(matrix){
  let positiveNumbers = [];
  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[0].length; col++){
      if(matrix[row][col] > 0){
        positiveNumbers.push([row,col])
      }
    } 
  }
  return positiveNumbers;
}
