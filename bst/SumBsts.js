function sumBsts(tree) {
  // Write your code here.
  return getTreeInfo(tree).totalSumBstNodes;
}

function getTreeInfo(tree){
  if(tree === null){
    return {
      isBst: true,
      maxValue: -Infinity,
      minValue: Infinity,
      bstSum: 0,
      bstSize: 0,
      totalSumBstNodes: 0
    }
  }

  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const satisfiesBstProp = 
    tree.value > leftTreeInfo.maxValue && tree.value <= rightTreeInfo.minValue;
  const isBst = satisfiesBstProp && leftTreeInfo.isBst && rightTreeInfo.isBst;

  const maxValue = Math.max(tree.value, Math.max(leftTreeInfo.maxValue, rightTreeInfo.maxValue));
  const minValue = Math.min(tree.value, Math.min(leftTreeInfo.minValue, rightTreeInfo.minValue));

  let bstSum = 0;
  let bstSize = 0;

  let totalSumBstNodes = leftTreeInfo.totalSumBstNodes + rightTreeInfo.totalSumBstNodes;

  if(isBst){
    bstSum = tree.value + leftTreeInfo.bstSum + rightTreeInfo.bstSum;
    bstSize = 1 + leftTreeInfo.bstSize + rightTreeInfo.bstSize;

    if(bstSize >= 3) totalSumBstNodes = bstSum;
  }

  return {
      isBst,
      maxValue,
      minValue,
      bstSum,
      bstSize,
      totalSumBstNodes
    }
}


const tree = {
  value:20,
  left:{
    value:7,
    left:{
      value:2,
      left:null,
      right:null
    },
    right:{
      value:8,
      left:{
        value:7,
        left:null,
        right:null
      },
      right:{
        value:9,
        left:null,
        right:null
      }
    }
  },
  right:{
    value:10,
    left:{
      value:5,
      left:{
        value:2,
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
        value:8,
        left:null,
        right:null
      }
    }
  }
}

console.log(sumBsts(tree));