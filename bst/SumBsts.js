function sumBsts(tree) {
  return sumBstsHelper(tree).bstSumNodes;
}

function sumBstsHelper(tree){
  if(tree === null){
    return { isBst:true, maxVal:-Infinity, minVal:Infinity, bstSum:0, bstSize:0, bstSumNodes:0 }
  }
  const leftSubtree = sumBstsHelper(tree.left);
  const rightSubtree = sumBstsHelper(tree.right);

  const satisfiesBstProp = tree.value > leftSubtree.maxVal && tree.value <= rightSubtree.minVal;
  const isBst = satisfiesBstProp && leftSubtree.isBst && rightSubtree.isBst;

  const maxVal = Math.max(tree.value, leftSubtree.maxVal, rightSubtree.maxVal);
  const minVal = Math.min(tree.value, leftSubtree.minVal, rightSubtree.minVal);

  let bstSumNodes = leftSubtree.bstSumNodes + rightSubtree.bstSumNodes;

  let bstSum = 0; 
  let bstSize = 0;
  
  if(isBst){
    bstSum = tree.value + leftSubtree.bstSum + rightSubtree.bstSum;
    bstSize = 1 + leftSubtree.bstSize + rightSubtree.bstSize;

    if(bstSize >= 3){
      bstSumNodes = bstSum
    }
  }
  return{
    isBst,
    maxVal,
    minVal,
    bstSum,
    bstSize,
    bstSumNodes
  }
}


