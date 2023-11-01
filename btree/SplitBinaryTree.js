

function splitBinaryTree(tree){
  const desiredSum = getTreeSum(tree)/2;
  let canBeSplit = trySubtrees(tree, desiredSum)[1];
  return canBeSplit ? desiredSum : 0;
}

function trySubtrees(tree, desiredSum){
  if(tree === null) return [0, false];

  const [leftSum, canLeftBeSplit] = trySubtrees(tree.left,desiredSum);
  const [rightSum, canRightBeSplit] = trySubtrees(tree.right, desiredSum);

  const currentTreeSum = tree.value + leftSum + rightSum;

  const canBeSplit = canLeftBeSplit || canRightBeSplit || currentTreeSum === desiredSum

  return [currentTreeSum, canBeSplit]
}

function getTreeSum(tree){
  if(tree === null) return 0;

  return tree.value + getTreeSum(tree.left) + getTreeSum(tree.right);
}


const tree = {
  value:1,
  left:{
    value:3,
    left:{
      value:6,
      left:{
        value:200,
        left:null,
        right:null
      },
      right:null
    },
    right:{
      value:-5,
      left:null,
      right:null
    }
  },
  right:{
    value:-2,
    left:{
      value:5,
      left:null,
      right:null
    },
    right:{
      value:2,
      left:null,
      right:null
    }
  }
}

console.log(splitBinaryTree(tree));


