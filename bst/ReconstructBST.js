

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {

  return reconstructBstHelper(-Infinity, Infinity, preOrderTraversalValues, {rootIdx:0})
}

function reconstructBstHelper(lowerBound, upperBound, preOrderTraversalValues, treeInfo){
  if(treeInfo.rootIdx === preOrderTraversalValues.length) return null;

  const rootValue = preOrderTraversalValues[treeInfo.rootIdx];
  if(rootValue < lowerBound || rootValue >= upperBound) return null
  
  treeInfo.rootIdx += 1;
  
  const left = reconstructBstHelper(lowerBound, rootValue, preOrderTraversalValues, treeInfo);
  const right = reconstructBstHelper(rootValue, upperBound, preOrderTraversalValues, treeInfo);

  return new BST(rootValue, left, right);
}







