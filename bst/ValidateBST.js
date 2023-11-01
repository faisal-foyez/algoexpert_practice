



function validateBst(tree) {

  return validateBstHelper(tree,-Infinity,Infinity);

}

function validateBstHelper(node,minValue,maxValue){
  if(node === null) return true;

  if(node.value < minValue || node.value >= maxValue) return false;
  
  const leftIsValid = validateBstHelper(node.left, minValue, node.value);
  return leftIsValid && validateBstHelper(node.right, node.value, maxValue);

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
      right:{
        value:11,
        left:null,
        right:null
      }
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

console.log(validateBst(tree));




