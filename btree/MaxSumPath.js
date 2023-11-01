function maxSumPath(tree){
  const [_,maxSum] = [...findMaxSum(tree)];
  return maxSum;
}

function findMaxSum(tree){
  const [LMSB, leftMaxPathSum] = maxSumPath(tree.left);
  const [rightMaxSumAsBranch, rightMaxPathSum] = maxSumPath(tree.right);

  const MaxChildSumAsBranch = Math.max(LMSB, rightMaxSumAsBranch);

  const {value} = tree;
  const MaxSumAsBranch = Math.max(MaxChildSumAsBranch + value, value);

  const maxSumAsRootNode = Math.max(LMSB + value + rightMaxSumAsBranch, MaxSumAsBranch);

  const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);

  return [MaxSumAsBranch, maxPathSum];
}