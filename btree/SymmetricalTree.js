function symmetricalTree(tree){
  return findSymmetricalTree(tree.left, tree.right, false);
}

function findSymmetricalTree(left,right){
  if(left !== null && right !== null && left.value === right.value){
    return findSymmetricalTree(left.left, right.right) && findSymmetricalTree(left.right, right.left);
  }

  return left === right;
}



// function findSymmetricalTree(tree){
//   const leftStack = [tree.left];
//   const rightStack = [tree.right];

//   while(leftStack.length){
//     const left = leftStack.pop();
//     const right = rightStack.pop();

//     if(left === null && right === null){
//       continue;
//     }
//     if(left === null || right === null || left.value !== right.value) {
//       return false;
//     }

//     leftStack.push(left.left);
//     leftStack.push(left.right);
//     rightStack.push(right.right)
//     rightStack.push(right.left);
//   }

//   return true;
// }

const tree = {
  value:1,
  left:{
    value:2,
    left:{
      value:3,
      left:{
        value:5,
        left:null,
        right:null
      },
      right:{
        value:6,
        left:null,
        right:null
      }
    },
    right:{
      value:4,
      left:null,
      right:null
    }
  },
  right:{
    value:2,
    left:{
      value:4,
      left:null,
      right:null
    },
    right:{
      value:3,
      left:{
        value:6,
        left:null,
        right:null
      },
      right:{
        value:5,
        left:null,
        right:null
      }
    }
  }
}

console.log(findSymmetricalTree(tree))

