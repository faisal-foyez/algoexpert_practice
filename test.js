const arr = new Array(5).fill(new Array(5).fill(0));

const arr2 = arr.map(row=>row.map(el=>3))

console.log(arr2);