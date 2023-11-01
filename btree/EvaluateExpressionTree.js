
function evaluateExpressionTree(node){
  if(node.value === -1){
    return evaluateExpressionTree(node.left) + evaluateExpressionTree(node.right);
  }else if(node.value === -2){
    return evaluateExpressionTree(node.left) - evaluateExpressionTree(node.right);
  }else if(node.value === -3){  
    return Math.trunc(evaluateExpressionTree(node.left) / evaluateExpressionTree(node.right));
  }else if(node.value === -4){
    return evaluateExpressionTree(node.left) * evaluateExpressionTree(node.right);
  }else{
    return node.value;
  }
}

console.log(evaluateExpressionTree(tree));


const tree = {
  value:-1,
  left:{
    value:-2,
    left:{
      value:-4,
      left:{
        value:2,
        left:null,
        right:null
      },
      right:{
        value:3,
        left:null,
        right:null
      }
    },
    right:{
      value:2,
      left:null,
      right:null
    }
  },
  right:{
    value:-3,
    left:{
      value:8,
      left:null,
      right:null
    },
    right:{
      value:3,
      left:null,
      right:null
    }
  }
}
