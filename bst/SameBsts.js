function sameBsts(arrayOne, arrayTwo){
  return areSameBsts(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
}

function areSameBsts(arrayOne, arrayTwo, rootIdxOne, rootIdxTwo, lowerBound, upperBound){
  if(rootIdxOne === -1 || rootIdxTwo === -1){
    return rootIdxOne === rootIdxTwo;
  }

  if(arrayOne[rootIdxOne] !== arrayTwo[rootIdxTwo]) return false;

  const leftRootIdxOne = getIdxOfFirstSmaller(arrayOne, rootIdxOne, lowerBound);
  const leftRootIdxTwo = getIdxOfFirstSmaller(arrayTwo, rootIdxTwo, lowerBound);
  const rightRootIdxOne = getIdxOfFirstBiggerOrEqual(arrayOne, rootIdxOne, upperBound);
  const rightRootIdxTwo = getIdxOfFirstBiggerOrEqual(arrayTwo, rootIdxTwo, upperBound);

  let currentValue = arrayOne[rootIdxOne];

  const leftAreSameBst = areSameBsts( arrayOne, arrayTwo, leftRootIdxOne, leftRootIdxTwo, lowerBound, currentValue );
  const rightAreSameBst = areSameBsts( arrayOne, arrayTwo, rightRootIdxOne, rightRootIdxTwo, currentValue, upperBound );
  return leftAreSameBst && rightAreSameBst;
}

function getIdxOfFirstSmaller(array, startingIdx, minVal){
  for(let i = startingIdx + 1; i < array.length; i++){
    if(array[i] < array[startingIdx] && array[i] >= minVal){
      return i;
    }
  }
  return -1;
}

function getIdxOfFirstBiggerOrEqual(array, startingIdx, maxVal){
  for(let i = startingIdx + 1; i < array.length; i++){
    if(array[i] >= array[startingIdx] && array[i] < maxVal){
      return i;
    }
  }
  return -1;
}
