//**********BFS Solution ***************************** */
// function findNodesDistanceK(tree, target, k) {
//   // Write your code here.
//   const nodeToParents = {};
//   findNodesToParents(tree, nodeToParents);

//   const targetNode = findNodeFromValue(target, tree, nodeToParents);

//   return bfsForNodeDistanceK(targetNode, nodeToParents, k);
// }

// function bfsForNodeDistanceK(targetNode, nodeToParents, k){
//   const queue = [[targetNode, 0]];
//   const seen = new Set([targetNode.value]);

//   while(queue.length){
//     const [currentNode, distanceFromTarget] = queue.shift();

//     if(distanceFromTarget === k){
//       const nodeDistanceK = queue.map(pair => pair[0].value);
//       nodeDistanceK.push(currentNode.value);
//       return nodeDistanceK;
//     }

//     const connectedNodes = [currentNode.left, currentNode.right, nodeToParents[currentNode.value]];

//     for(let node of connectedNodes){
//       if(node === null) continue;

//       if(seen.has(node.value)) continue;

//       seen.add(node.value);
//       queue.push([node, distanceFromTarget + 1])
//     }
//   }
//   return [];
// }

// function findNodeFromValue(target, tree, nodeToParents){
//   if(tree.value === target){
//     return tree;
//   }
//   let parentNode = nodeToParents[target];
//   if(parentNode.left && parentNode.left.value === target){
//      return parentNode.left; 
//   }

//   return parentNode.right;
  
// }

// function findNodesToParents(node, nodeToParents, parent=null){
//   if(node){
//     nodeToParents[node.value] = parent;
//     parent = node;
//     findNodesToParents(node.left, nodeToParents, parent);
//     findNodesToParents(node.right, nodeToParents, parent);
//   } 
// }
//********************************************************** */


//*********************DFS Solution***************** */
function findNodesDistanceK(tree, target, k) {
  const nodesDistanceK = [];
  findTargetFromValue(tree, target, k, nodesDistanceK);
  return nodesDistanceK;
}

function findTargetFromValue(node, target, k, nodesDistanceK){
  if(node === null) return -1

  if(node.value === target){
    addSubtreeNodeAtDistanceK(node, 0, k, nodesDistanceK)
    return 1;
  }

  const leftDistance = findTargetFromValue(node.left, target, k, nodesDistanceK)
  const rightDistance = findTargetFromValue(node.right, target, k, nodesDistanceK)

  if(leftDistance === k || rightDistance === k) nodesDistanceK.push(node.value);
    
  if(leftDistance !== -1){
    addSubtreeNodeAtDistanceK(node.right, leftDistance + 1, k, nodesDistanceK);
    return leftDistance + 1;
  }

  if(rightDistance !== -1){
    addSubtreeNodeAtDistanceK(node.left, rightDistance + 1, k, nodesDistanceK);
    return rightDistance + 1;
  }

  return -1;
}

function addSubtreeNodeAtDistanceK(node, distance, k, nodesDistanceK){
  if(node === null) return;

  if(distance === k) nodesDistanceK.push(node.value)
  else{
    addSubtreeNodeAtDistanceK(node.left, distance + 1, k, nodesDistanceK);
    addSubtreeNodeAtDistanceK(node.right, distance + 1, k, nodesDistanceK);
  }
}

const tree = {
  value: 1,
  left:{
    value:2,
    left:{
      value:4,
      left:null,
      right:null
    },
    right:{
      value:5,
      left:null,
      right:null
    }
  },
  right:{
    value:3,
    left:null,
    right:{
      value:6,
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
  }
}

console.log(findNodesDistanceK(tree, 3, 2))