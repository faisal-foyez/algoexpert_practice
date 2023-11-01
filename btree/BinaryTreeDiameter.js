
function binaryTreeDiameter(node){
  return getTreeInfo(node).diameter;
}

function getTreeInfo(node){
  if(node === null){
    return {diameter:0, height:0}
  }

  const leftTreeInfo = getTreeInfo(node.left);
  const rightTreeInfo = getTreeInfo(node.right);

  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameter = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
  const currentDiameter = Math.max(maxDiameter, longestPathThroughRoot);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return {diameter:currentDiameter, height:currentHeight}
}


console.log(binaryTreeDiameter(tree));