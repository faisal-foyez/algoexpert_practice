

function heightBalancedBinaryTree(tree){
  return getTreeInfo(tree).isBalanced;
}

function getTreeInfo(node){
  if(node === null) 
    return {isBalanced:true, height:-1}

  const leftValue = getTreeInfo(node.left);
  const rightValue = getTreeInfo(node.right);

  const isBalanced = leftValue.isBalanced && 
            rightValue.isBalanced &&  
            Math.abs(leftValue.height - rightValue.height) <= 1;
  
  return {
    isBalanced, 
    height: 1 + Math.max(leftValue.height,rightValue.height)
  }
}

const tree = {
  value:1,
  left:{
    value:2,
    left:{
      value:4,
      left:null,
      right:null
    },
    right:{
      value:5,
      left:{
        value:7,
        left:null,
        right:null
      },
      right:{
        value:8,
        left:null,
        right:null
      }
    }
  },
  right:{
    value:3,
    left:null,
    right:{
      value:6,
      left:null,
      right:null
    }
  }
}

console.log(heightBalancedBinaryTree(tree))











