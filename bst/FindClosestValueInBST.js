
// function findClosestValueInBst(tree, target){
//   return findClosestValueInBstHelper(tree,target,Infinity);
// }

// function findClosestValueInBstHelper(tree,target,closest){

//   if(tree === null) return closest;

//   if(Math.abs(tree.value - target) < closest){
//     closest = tree.value;
//   }
  
//   if(tree.value > target){
//     return findClosestValueInBstHelper(tree.left,target,closest) 
//   }else if(tree.value < target){
//     return findClosestValueInBstHelper(tree.right,target,closest);
//   }else{
//     return closest;
//   }

// }

function findClosestValueInBst(tree,target){
  let current = tree;
  let closest = Infinity;

  while(current){
    if(Math.abs(current.value - target) < closest){
      closest = current.value;
    }

    if(current.value > target){
      current = current.left;
    }else if(current.value < target){
      current = current.right;
    }else{
      break;
    }
  }
  return closest;
}

const tree = {
  value:10,
  left:{
    value:5,
    left:{
      value:2,
      left:{
        value:1,
        left:null,
        right:null
      },
      right:null
    },
    right:{
      value:5,
      left:null,
      right:null
    }
  },
  right:{
    value:15,
    left:{
      value:13,
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

console.log(findClosestValueInBst(tree,12));