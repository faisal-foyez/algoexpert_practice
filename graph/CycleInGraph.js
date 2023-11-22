function cycleInGraph(edges){
  const numberOfNodes = edges.length;
  const visited = new Array(numberOfNodes).fill(0);
  const inStack = new Array(numberOfNodes).fill(0);

  for(let node=0; i < edges.length; i++){
    if(visited[node]) continue;

    findCycle(node, edges, visited, inStack)
  }
}


const edges = [
  [1,3],
  [2,3,4],
  [0],
  [],
  [2,5],
  []
]

console.log(cycleInGraph(edges));