// function minimumWaitingTime(queries) {
//   // Write your code here.
//   const sortedQueries = queries.sort((a,b)=>a-b);

//   let minWaitingTime = 0;
//   let result = 0;
//   for(let i = 1; i < sortedQueries.length; i++){
//     minWaitingTime += sortedQueries[i-1];
//     result += minWaitingTime;
//   }
//   console.log(minWaitingTime);
// }

function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  for(let idx = 0; idx < queries.length; idx++){
    const duration = queries[idx];
    const quriesLeft = queries.length - (idx + 1);
    totalWaitingTime += duration * quriesLeft;
  }

  return totalWaitingTime;
}
console.log(minimumWaitingTime([3,2,1,2,6])); 