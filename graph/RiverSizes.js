function riverSizes(matrix) {
  let sizes = [];
  const visited = matrix.map(row => row.map(v=>false));

  for(let i=0; i < matrix.length; i++){
    for(let j=0; j < matrix[0].length; j++){
      if(visited[i][j] === true) continue;
      traverseNode(i,j,matrix,visited,sizes);
    }
  }
  return sizes;
}
function traverseNode(i, j, matrix, visited, sizes){
  let currentRiverSize = 0;
  let nodesToExplore = [[i,j]];
  
  while(nodesToExplore.length){
    
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];

    if(visited[i][j] === true) continue;
    visited[i][j] = true;
    if(matrix[i][j] === 0) continue;
    currentRiverSize++;
    const unvisitedNeighbors = getUnvisitedNeighbors(i,j,matrix,visited);
    for(let neighbor of unvisitedNeighbors){
      nodesToExplore.push(neighbor);
    }
  }
  if(currentRiverSize > 0) sizes.push(currentRiverSize);
}

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
    if(row < 0 || i+cellRow >= matrix.length || col < 0 || col >= matrix[0].length)
      continue;
    if(visited[row][col])
      continue;
    unvisitedNeighbors.push([row,col])
  }
  return unvisitedNeighbors;
}