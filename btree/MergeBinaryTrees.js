// function mergeBinaryTrees(tree1,tree2){
//   return merge(tree1,tree2);
// }

// function merge(tree1, tree2){
//   if(tree1 === null) return tree2;
//   if(tree2 === null) return tree1;

//   tree1.value += tree2.value;

//   tree1.left = merge(tree1.left, tree2.left);
//   tree1.right = merge(tree1.right, tree2.right);

//   return tree1;
// }


function mergeBinaryTrees(tree1,tree2){
  if(tree1 === null) return tree2;

  const tree1Stack = [tree1];
  const tree2Stack = [tree2];

  while(tree1Stack.length){
    const tree1Node = tree1Stack.pop();
    const tree2Node = tree2Stack.pop();

    if(tree2Node === null) continue;
    
    tree1Node.value += tree2Node.value;

    if(tree1Node.left === null){
      tree1Node.left = tree2Node.left;
    }else{
      tree1Stack.push(tree1Node.left);
      tree2Stack.push(tree2Node.left);
    }

    if(tree1Node.right === null){
      tree1Node.right = tree2Node.right;
    }else{
      tree1Stack.push(tree1Node.right);
      tree2Stack.push(tree2Node.right);
    }
  }

  return tree1;
}


const tree1 = {
  value:1,
  left:{
    value:3,
    left:{
      value:7,
      left:null,
      right:null
    },
    right:{
      value:4,
      left:null,
      right:null
    }
  },
  right:{
    value:2,
    left:null,
    right:null
  }
}
const tree2 = {
  value:1,
  left:{
    value:5,
    left:{
      value:2,
      left:null,
      right:null
    },
    right:null
  },
  right:{
    value:9,
    left:{
      value:7,
      left:null,
      right:null
    },
    right:{
      value:6,
      left:null,
      right:null
    }
  }
}

console.log(mergeBinaryTrees(tree1, tree2));



