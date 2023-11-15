
function removeIslands(matrix) {
  const visited = matrix.map(row=>row.map(v=>false));
  for(let row=0; row < matrix.length; row++){
    for(let col=0; col < matrix[0].length; col++){
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[0].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if(!isBorder){
        continue;
      }
      if(matrix[row][col] !== 1){
        continue;
      }
      findAdjacentNodes(matrix, row, col, visited);
    }
  }
  for(let i=1; i < matrix.length; i++){
    for(let j = 1; j < matrix[i].length; j++){
      if(!visited[i][j] && matrix[i][j] === 1){
        matrix[i][j] = 0
      }
    } 
  }
  return matrix;
}
function findAdjacentNodes(matrix, startRow, startCol, visited) {
  const stack = [[startRow,startCol]];
  while (stack.length > 0) {
    const [row, col] = stack.pop();
    if(visited[row][col]) continue;

    visited[row][col] = true;
    const neighbors = getNeighbors(matrix, row, col);
    for(let neighbor of neighbors){
      const [neighborRow, neighborCol] = neighbor;
      
      if(matrix[neighborRow][neighborCol] !== 1) continue;
      
      stack.push(neighbor);
    }
  }
}
function getNeighbors(matrix, i, j) {
  
  const neighbors = [];
  const neighborCells = [[0,1],[1,0],[-1,0],[0,-1]];
  
  for(let [cellRow, cellCol] of neighborCells){
    const row = cellRow + i;
    const col = cellCol + j;

    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) continue;

    neighbors.push([row,col])
  }
  return neighbors;
}

const matrix = [
  [1,0,0,0,0,0],
  [0,1,0,1,1,1],
  [0,0,1,0,1,0],
  [1,1,0,0,1,0],
  [1,0,1,1,0,0],
  [1,0,0,0,0,1]
]
console.log(removeIslands(matrix));