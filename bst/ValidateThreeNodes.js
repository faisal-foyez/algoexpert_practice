// function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
//   // Write your code here.
//   if(isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo);

//   if(isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo);

//   return false;
// }

// function isDescendant(node,target){
//   if(node === null) return false;

//   if(node === target) return true;

//   return target.value < node.value 
//     ? isDescendant(node.left, target) 
//     : isDescendant(node.right, target)
// }

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  // Write your code here.
  let searchOne = nodeOne;
  let searchTwo = nodeThree;

  while(true){
    const foundThreeFromOne = searchOne === nodeThree;
    const foundOneFromThree = searchTwo === nodeOne;
    const foundNodeTwo = searchOne === nodeTwo || searchTwo === nodeTwo;
    const finishedSearching = searchOne === null && searchTwo === null;

    if(foundThreeFromOne || foundOneFromThree || foundNodeTwo || finishedSearching){
      break;
    }

    if(searchOne !== null){
      searchOne = searchOne.value > nodeTwo.value ? searchOne.left : searchOne.right;
    }

    if(searchTwo !== null){
      searchTwo = searchTwo.value > nodeTwo.value ? searchTwo.left : searchTwo.right;
    }
  }

  const foundNodeFromOther = searchOne === nodeThree || searchTwo === nodeOne;

  const foundNodeTwo = searchOne === nodeTwo || searchTwo === nodeTwo;
  if(!foundNodeTwo || foundNodeFromOther) return false;

  return searchForTarget(nodeTwo, searchOne === nodeTwo ? nodeThree : nodeOne);
}

function searchForTarget(node,target){
  while(node !== null && node !== target){
    node = target.value < node.value ? node.left : node.right;
  }
  return node === target;
}
const tree = {
  value:5,
  left:{
    value:2,
    left:{
      value:1,
      left:{
        value:0,
        left:null,
        right:null
      },
      right:null
    },
    right:{
      value:4,
      left:{
        value:3,
        left:null,
        right:null
      },
      right:null
    }
  },
  right:{
    value:7,
    left:{
      value:6,
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
const nodeOne = tree;
const nodeTwo = tree.left;
const nodeThree = tree.left.right.left;
// console.log(nodeOne.value,nodeTwo.value, nodeThree.value);
console.log(validateThreeNodes(nodeOne,nodeTwo,nodeThree));