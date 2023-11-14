








function getUnvisitedNeighbors(i,j,matrix,visited) {
  const unvisitedNeighbors = [];
  const adjacentCells = [
    [0,1],
    [1,0],
    [-1,0],
    [0,-1]
  ];
  
  for(let [cellRow,cellCol] of adjacentCells){
    const row = i + cellRow;
    const col = j + cellCol;

    if(row < 0 || 
      i+cellRow >= matrix.length || 
      col < 0 || 
      col >= matrix[0].length) continue;

    if(visited[row][col])
      continue;

    unvisitedNeighbors.push([row,col])
  }
  return unvisitedNeighbors;
}