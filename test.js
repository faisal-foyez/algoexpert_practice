








function getNeighbors(matrix, i, j) {
  
  const neighbors = [];
  const neighborCells = [[0,1],[1,0],[-1,0],[0,-1]];
  
  for(let [cellRow, cellCol] of neighborCells){
    const row = cellRow + i;
    const col = cellCol + j;

    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) 
      continue;

    neighbors.push([row,col])
  }
  return neighbors;
}