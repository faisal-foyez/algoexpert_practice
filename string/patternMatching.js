

function patternMatcher(string, pattern){
  const newPattern = getNewPattern(pattern);
  const didSwitch = pattern[0] !== newPattern[0];
  let counts = {x:0, y:0}
  const firstYPosition = getCountsAndFirstYPosition(newPattern, counts);
  if(counts['y'] !== 0){
    for(let lenOfX = 1 ; lenOfX < string.length; lenOfX++){
      
      let lenOfY = (string.length - lenOfX * counts['x'])/counts['y'];
      if(lenOfY <= 0 || lenOfY % 1 !== 0) continue;
      let yIdx = firstYPosition * lenOfX;
      const x = string.slice(0, lenOfX);
      const y = string.slice(yIdx, lenOfY + yIdx);
      const newPotentialMatch = newPattern.map( char =>  char === 'x' ? x : y);
      if(string === newPotentialMatch.join('')){
        return !didSwitch ? [x, y] : [y, x]
      }
    }
  }else{
    let lenOfX = string.length / counts['x'];
    let x = string.slice(0, lenOfX);
    let newPotentialMatch = newPattern.map(char => x);
    if(string === newPotentialMatch.join('')){
      return !didSwitch ? [x, ''] : ['', x]
    }
  }
}

function getNewPattern(pattern){
  let newPattern = pattern.split('');

  if(newPattern[0] === 'x'){
    return newPattern;
  }else{
    return newPattern.map(el => el === 'x' ? 'y' : 'x')
  }
}

function getCountsAndFirstYPosition(newPattern, counts){
  let firstYPosition = null;
  for(let i=0; i < newPattern.length; i++){
    let char = newPattern[i];
    counts[char] += 1;
    if(char === 'y' && firstYPosition === null){
      firstYPosition = i
    }
  }
  return firstYPosition;

}
