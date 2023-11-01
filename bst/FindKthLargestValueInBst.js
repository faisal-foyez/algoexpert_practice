




function findKthLargestValueInBst(tree, k) {
  const treeInfo = {distance:0, nodeValue:0}
  findKthLargestValueInBstHelper(tree, treeInfo, k);
  return treeInfo.nodeValue;
}

function findKthLargestValueInBstHelper(tree, treeInfo, k){
  if(tree == null || treeInfo.distance === k) return;
  
  findKthLargestValueInBstHelper(tree.right, treeInfo, k);
  if(treeInfo.distance < k){
    treeInfo.distance += 1;
    treeInfo.nodeValue = tree.value;
    findKthLargestValueInBstHelper(tree.left, treeInfo, k);
  }
}

const tree = {
  value:15,
  left:{
    value:5,
    left:{
      value:2,
      left:{
        value:1,
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
      value:5,
      left:null,
      right:null
    }
  },
  right:{
    value:20,
    left:{
      value:17,
      left:null,
      right:null
    },
    right:{
      value:22,
      left:null,
      right:null
    }
  }
}

console.log(findKthLargestValueInBst(tree, 3))










