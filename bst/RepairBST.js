function repairBst(tree){
  let nodeOne = null;
  let nodeTwo = null;
  let previousNode = null;

  let stack = [];
  let currentNode = tree;

  while(true){
    if(currentNode === null){
      currentNode = stack.pop();
      if(previousNode !== null && currentNode.value < previousNode.value){
        if(!nodeOne){
          nodeOne = previousNode;
          nodeTwo = currentNode;
        }else{
          nodeTwo = currentNode
        }
      }
      previousNode = currentNode;
      currentNode = currentNode.right;
    }else{
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    if(stack.length === 0 && currentNode === null) break;
  }

  const temp = nodeOne.value;
  nodeOne.value = nodeTwo.value;
  nodeTwo.value = temp;
}

const tree = {
  value:10,
  left:{
    value:7,
    left:{
      value:3,
      left:{
        value:2,
        left:null,
        right:null
      },
      right:null
    },
    right:{
      value:12,
      left:null,
      right:null
    }
  },
  right:{
    value:20,
    left:{
      value:8,
      left:null,
      right:{
        value:14,
        left:null,
        right:null
      }
    },
    right:{
      value:22,
      left:null,
      right:null
    }
  }
}

console.log(repairBst(tree));