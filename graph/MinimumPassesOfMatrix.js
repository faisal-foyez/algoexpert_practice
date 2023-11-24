
// function minimumPassesOfMatrix(matrix) {
//   const passes = convertNegatives(matrix);
//   return !containsNegative(matrix) ? passes -1 : -1;
// }

// function convertNegatives(matrix) {
//   let nextPassQueue = getAllPositiveNumbers(matrix); 
//   let passes = 0;
//   while (nextPassQueue.length > 0) {
//     const currentPassQueue = nextPassQueue;
//     nextPassQueue = [];

//     while(currentPassQueue.length > 0){
//       const [currentRow, currentCol] = currentPassQueue.shift();

//       const adjacentPositions = getAdjacentPositions(currentRow, currentCol, matrix);
//       for(let [adjacentRow, adjacentCol] of adjacentPositions){
//         if(matrix[adjacentRow][adjacentCol] < 0){
//           matrix[adjacentRow][adjacentCol] *= -1
//           nextPassQueue.push([adjacentRow, adjacentCol])
//         }
//       }
//     }
//     passes++;
//   }
//   return passes;
// }

// function containsNegative(matrix){
  
//   for(let row = 0; row < matrix.length; row++){
//     for(let col = 0; col < matrix[0].length; col++){
//       if(matrix[row][col] < 0){
//         return true;
//       }
//     } 
//   }
//   return false;
// }

// function getAdjacentPositions(row,col,matrix) {
//   let adjacentPositions = [];
  
//   const adjacentCells = [
//     [0,1],
//     [1,0],
//     [-1,0],
//     [0,-1]
//   ]
//   for(let [cellRow, cellCol] of adjacentCells){
//     const adjacentRow = cellRow + row;
//     const adjacentCol = cellCol + col;

//     if(adjacentRow >= 0 && adjacentRow < matrix.length && adjacentCol >=0 && adjacentCol < matrix[0].length){
//       adjacentPositions.push([adjacentRow, adjacentCol]);
//     }
//   }
//   return adjacentPositions;
// }

// function getAllPositiveNumbers(matrix){
//   let positiveNumbers = [];
//   for(let row = 0; row < matrix.length; row++){
//     for(let col = 0; col < matrix[0].length; col++){
//       if(matrix[row][col] > 0){
//         positiveNumbers.push([row,col])
//       }
//     } 
//   }
//   return positiveNumbers;
// }

function minimumPassesOfMatrix(matrix) {
    const passes = convertNegatives(matrix);
    return !containsNegative(matrix) ? passes -1 : -1;
}

function convertNegatives(matrix) {
  let queue = getAllPositiveNumbers(matrix);

  let passes = 0;
  while (queue.length > 0) {
    
    let currentSize = queue.length;

    while(currentSize > 0){
      const [currentRow, currentCol] = queue.shift();

      const adjacentPositions = getAdjacentPositions(currentRow, currentCol, matrix);
      for(let [adjacentRow, adjacentCol] of adjacentPositions){
        if(matrix[adjacentRow][adjacentCol] < 0){
          matrix[adjacentRow][adjacentCol] *= -1
          queue.push([adjacentRow, adjacentCol])
        }
      }
      currentSize--;
    }
    passes++;
  }
  return passes;
}

function containsNegative(matrix){

  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[0].length; col++){
      if(matrix[row][col] < 0){
        return true;
      }
    } 
  }
  return false;
}

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

    if(adjacentRow >= 0 && adjacentRow < matrix.length && adjacentCol >=0 && adjacentCol < matrix[0].length){
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


const matrix = [
  [0, -1, -3, 2, 0],
  [1, -2, -5, -1, -3],
  [3, 0, 0, -4, -1]
]
console.log(minimumPassesOfMatrix(matrix));