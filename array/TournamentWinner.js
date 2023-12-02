function tournamentWinner(competitions, results) {
  // Write your code here.
  const teams = {};
  let tournamentWinner = null;
  let tournamentWinnerPoint = -Infinity;
  for(let idx = 0; idx < competitions.length; idx++){
    const [home, away] = competitions[idx];
    const matchResult = results[idx];
    if(matchResult === 0){
      teams[away] = (teams[away] || 0) + 1;
      
      tournamentWinnerPoint = teams[away] > tournamentWinnerPoint ? teams[away] : tournamentWinnerPoint;
      tournamentWinner = teams[away] > tournamentWinnerPoint ? away : tournamentWinner;
    }else if(matchResult === 1){
      teams[home] = (teams[home] || 0) + 1;
      tournamentWinnerPoint = teams[home] > tournamentWinnerPoint ? teams[home] : tournamentWinnerPoint;
      tournamentWinner = teams[home] > tournamentWinnerPoint ? home : tournamentWinner;
    }
  }
  return tournamentWinner;
}

const competitions = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"]
];
const results = [0, 1, 1]

console.log(tournamentWinner(competitions, results))