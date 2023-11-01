

// function findSuccessor(tree, node){
//   const result = inOrderTraversal(tree);
  
//   for(let i=0; i < result.length; i++){
//     if(result[i] === node){
//       return result[i+1]
//     }
//   }
// }

// function inOrderTraversal(tree, result=[]){
//   if(tree === null) return result;

//   inOrderTraversal(tree.left,result);
//   result.push(tree);
//   inOrderTraversal(tree.right, result);

//   return result;
// }


function findSuccessor(tree, node){
  if(node.right !== null){
    return getLeftMostChild(node.right);
  }

  return getRightMostParent(node);
}

function getLeftMostChild(node){
  let currentNode  = node;
  while(currentNode.left){
    currentNode = currentNode.left;
  }
  return currentNode;
}

function getRightMostParent(node){
  let currentNode = node;
  while(currentNode.parent !== null && currentNode.parent.right === currentNode){
    currentNode = currentNode.parent;
  }
  return currentNode.parent;
}



console.log(findSuccessor(node1,node5))

