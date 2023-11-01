function sameBsts(arrayOne, arrayTwo) {
  // Write your code here.
  return areSameBsts(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
}

function areSameBsts(arrayOne, arrayTwo, rootIdxOne, rootIdxTwo, minVal, maxVal){
  if(rootIdxOne === -1 || rootIdxTwo === -1) return rootIdxOne === rootIdxTwo;

  if(arrayOne[rootIdxOne] !== arrayTwo[rootIdxTwo]) return false;

  const leftRootIdxOne = getIdxOfFirstSmaller(arrayOne, rootIdxOne, minVal);
  const leftRootIdxTwo = getIdxOfFirstSmaller(arrayTwo, rootIdxTwo, minVal);

  const rightRootIdxOne = getIdxOfFirstBiggerOrEqual(arrayOne, rootIdxOne, maxVal);
  const rightRootIdxTwo = getIdxOfFirstBiggerOrEqual(arrayTwo, rootIdxTwo, maxVal);

  const currentValue = arrayOne[rootIdxOne];

  const leftAreSame = areSameBsts(
    arrayOne,
    arrayTwo,
    leftRootIdxOne,
    leftRootIdxTwo,
    minVal,
    currentValue
  );

  const rightAreSame = areSameBsts(
    arrayOne,
    arrayTwo,
    rightRootIdxOne,
    rightRootIdxTwo,
    currentValue,
    maxVal
  )

  return leftAreSame && rightAreSame;
}

function getIdxOfFirstSmaller(array, startingIdx, minVal){
  for(let i = startingIdx + 1; i < array.length; i++){
    if(array[i] < array[startingIdx] && array[i] >= minVal) return i;
  }
  return -1;
}

function getIdxOfFirstBiggerOrEqual(array, startingIdx, maxVal){
  for(let i = startingIdx + 1; i < array.length; i++){
    if(array[i] >= array[startingIdx] && array[i] < maxVal) return i;
  }
  return -1;
}

const arr1 = [10,15,8,12,94,81,5,2,11];
const arr2 = [10,8,5,15,2,12,11,94,81];

console.log(sameBsts(arr1, arr2));


function sameBsts(arrayOne, arrayTwo){
  return areSameBsts(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
}

function areSameBsts(arrayOne, arrayTwo, rootIdxOne, rootIdxTwo, minVal, maxVal){
  if(rootIdxOne === -1 || rootIdxTwo === -1){
    return rootIdxOne === rootIdxTwo;
  }

  if(arrayOne[rootIdxOne] !== arrayOne[rootIdxTwo]) return false;

  const leftRootIdxOne = getIdxOfFirstSmaller(arrayOne, rootIdxOne, minVal);
  const leftRootIdxTwo = getIdxOfFirstSmaller(arrayTwo, rootIdxTwo, minVal);
  const rightRootIdxOne = getIdxOfFirstBiggerOrEqual(arrayOne, rootIdxOne, maxVal);
  const rightRootIdxTwo = getIdxOfFirstBiggerOrEqual(arrayTwo, rootIdxTwo, maxVal);

  let currentValue = arrayOne[leftRootIdxOne];

  const leftBst = areSameBsts(arrayOne, arrayTwo, leftRootIdxOne, rightRootIdxOne, minVal, currentValue);
  const rightBst = areSameBsts(arrayOne, arrayTwo, leftRootIdxTwo, rightRootIdxTwo, currentValue, maxVal);

  return leftBst && rightBst;
}

function getIdxOfFirstSmaller(array, starting, minVal){
  for(let i = starting + 1; i < array.length; i++){
    if(array[i] < array[starting] && array[i] >= minVal){
      return i;
    }
  }
  return -1;
}

function getIdxOfFirstBiggerOrEqual(array, starting, minVal){
  for(let i = starting + 1; i < array.length; i++){
    if(array[i] >= array[starting] && array[i] < minVal){
      return i;
    }
  }
  return -1;
}