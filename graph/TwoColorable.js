function twoColorable(edges) {
  // Write your code here.
  const colors = edges.map(()=>null);
  const stack = [0]
  while(stack.length){
    const node = stack.pop();
    if(colors[node] === null){
      colors[node] = true;
    }
    for(let edge of edges[node]){
      if(colors[edge]){
        if(colors[edge] === colors[node]){
          return false;
        }
        continue;
      }
      
      colors[edge] = !colors[node]
      stack.push(edge);
    }
  }
  return true;
}

const graph = [
  [1,3],
  [0,2],
  [1,3],
  [0,2]
]
console.log(twoColorable(graph))