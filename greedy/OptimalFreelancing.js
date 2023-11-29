function optimalFreelancing(jobs) {
  const LENGTH_OF_WEEK = 7;

  jobs.sort((jobA, jobB) => jobB.payment - jobA.payment);
  const slots = new Array(LENGTH_OF_WEEK).fill(false);
  let profit = 0; 
  
  for(const job of jobs){
    const maxTime = Math.min(job.deadline, LENGTH_OF_WEEK);

    for(let time = maxTime - 1; time >=0; time--){
      if(slots[time] === false){
        profit += job.payment;
        slots[time] = true;
        break;
      }
    }
  }
  return profit;
}

const jobs = [
    {
      "deadline": 1,
      "payment": 2
    },
    {
      "deadline": 1,
      "payment": 1
    }
]

console.log(optimalFreelancing(jobs))