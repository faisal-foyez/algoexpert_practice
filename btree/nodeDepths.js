function nodeDepths(root,d=0){
  if(root === null) return 0;

  return d + nodeDepths(root.left, d+1) + nodeDepths(root.right, d+1);
}

function nodeDepthsWithoutRecursion(root){
  const stack = [{value:0,node:root}]
  let result = 0;
  while(stack.length){
    
    const {node,value} = stack.pop();
    
    if(node === null) continue;

    stack.push({value:value+1, node:node.left});
    stack.push({value:value+1, node:node.right});
    result += value;
  
  }
  return result;
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
console.log(nodeDepthsWithoutRecursion(tree));
