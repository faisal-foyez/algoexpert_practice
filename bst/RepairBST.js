// function repairBst(tree) {
//   let nodeOne = null;
//   let nodeTwo = null;
//   let previousNode = null;

//   function inOrderTraversal(node){
//     if(node === null) return; 
    
//     inOrderTraversal(node.left);

//     if(previousNode !== null && node.value < previousNode.value){
//       if(nodeOne === null){
//         nodeOne = previousNode;
//         nodeTwo = node;
//       }else{
//         nodeTwo = node;
//       }
//     }
//     previousNode = node;
//     inOrderTraversal(node.right);
//   }

//   inOrderTraversal(tree);

//   const temp = nodeOne.value;
//   nodeOne.value = nodeTwo.value;
//   nodeTwo.value = temp;

//   return tree;
// }


function repairBst(tree) {
  let nodeOne = null;
  let nodeTwo = null;
  let previousNode = null;

  let stack = [];
  let currentNode = tree;

  while (stack.length > 0 || currentNode !== null) {
    if (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop();
      if (previousNode !== null && currentNode.value < previousNode.value) {
        if (!nodeOne) {
          nodeOne = previousNode;
          nodeTwo = currentNode;
        } else {
          nodeTwo = currentNode;
        }
      }
      previousNode = currentNode;
      currentNode = currentNode.right;
    }
  }

  // Swap the values of nodeOne and nodeTwo
  if (nodeOne !== null && nodeTwo !== null) {
    [nodeOne.value, nodeTwo.value] = [nodeTwo.value, nodeOne.value];
  }

  return tree;
}



