function patternMatching(string,pattern){
  const newPattern = getNewPattern(pattern);
  const didSwitch = pattern[0] !== newPattern[0];
  const counts = { x:0, y:0 }
  const firstYPosition = getCountsAndFirstYPosition(counts, newPattern);
  
  if(counts['y'] !== 0){
    for(let lenOfX=1; lenOfX < string.length; lenOfX++){
      let lenOfY = (string.length - lenOfX * counts['x'])/counts['y'];
      if(lenOfY <= 0 || lenOfY % 1 !== 0) continue;
      let yIdx = firstYPosition * lenOfX;
      const x = string.slice(0,lenOfX);
      const y = string.slice(yIdx, yIdx + lenOfY);
      let newPotentialMatch = newPattern.map(char => char === 'x' ? x : y);
      if(string === newPotentialMatch.join('')){
        return !didSwitch ? [x,y] : [y,x]
      }
    }
  }else{
    let lenOfX = string.length / counts['x'];
    const x = string.slice(0,lenOfX);
    let newPotentialMatch = newPattern.map(char => char === 'x' ? x : y);
    if(string === newPotentialMatch.join('')){
      return !didSwitch ? [x,''] : ['',x]
    }
  }
}

function getCountsAndFirstYPosition(counts, pattern){
  let firstYPosition = null;
  for(let i = 0; i < pattern.length; i++){
    const char = pattern[i];
    counts[char] += 1;
    if(char === 'y' && firstYPosition === null){
      firstYPosition = i;
    }
  }
  return firstYPosition;
}

function getNewPattern(pattern){
  const newPattern = pattern.split('');
  if(newPattern[0] === 'x') return newPattern;
  return newPattern.map(char => char === 'x' ? 'y' : 'x')
}

console.log(patternMatching('gogopowerrangergogopowerranger','xxyxxy'))