

function branchSums(node){
  let result = [];
  branchSumsHelper(node, 0, result);
  return result;
}

function branchSumsHelper(node,sum,result){
  if(node.left === null && node.right === null){
    sum += node.value;
    result.push(sum);
    return
  }

  sum += node.value;

  node.left && branchSumsHelper(node.left, sum, result);
  node.right && branchSumsHelper(node.right, sum, result);
}





const tree = {
  value:1,
  left:{
    value:2,
    left:{
      value:4,
      left:{
        value:8,
        left:null,
        right:null
      },
      right:{
        value:9,
        left:null,
        right:null
      }
    },
    right:{
      value:5,
      left:{
        value:10,
        left:null,
        right:null
      },
      right:null
    }
  },
  right:{
    value:3,
    left:{
      value:6,
      left:null,
      right:null
    },
    right:{
      value:7,
      left:null,
      right:null
    }
  }
}

console.log(branchSums(tree));