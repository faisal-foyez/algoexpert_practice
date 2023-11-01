

// function invertBinaryTree(node){
//   const queue = [node];
//   while(queue.length){
//     const currentNode = queue.shift();
  
//     const left = currentNode.left;
//     const right = currentNode.right;
    
//     currentNode.right = left;
//     currentNode.left = right;

//     left && queue.push(left);
//     right && queue.push(right);

//   }
//   return node;
// }

function invertBinaryTree(node){
  invertBinaryTreeHelper(node);
  return node;
}

function invertBinaryTreeHelper(node){
  if(node === null) return;

  
  const left = node.left;
  node.left = node.right;
  node.right = left;
  
  invertBinaryTreeHelper(node.left);
  invertBinaryTreeHelper(node.right);

}



console.log(JSON.stringify(invertBinaryTree(tree)));



const tree = {
  value:1,
  left:{ value:2,
    left:{ value:4,
      left:{ value:8,
        left:null,
        right:null
      },
      right:{value:9,
        left:null,
        right:null
      }
    },
    right:{ value:5,
      left:{ value:10,
        left:null,
        right:null
      },
      right:null
    }
  },
  right:{ value:3,
    left:{ value:6,
      left:null,
      right:null
    },
    right:{ value:7,
      left:null,
      right:null
    }
  }
}
