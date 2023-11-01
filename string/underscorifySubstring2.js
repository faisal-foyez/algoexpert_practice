





function underScorify(bigString, locations){
  let locationIdx = 0;
  let stringIdx = 0;
  let i = 0;
  let finalString = [];

  while( stringIdx < bigString.length && locationIdx < locations.length){
      let [start, end] = locations[locationIdx];
      if(stringIdx === start){
          finalString.push('_')
      }else if(stringIdx === end){
          finalString.push('_');
          locationIdx++;
      }
      finalString.push(bigString[stringIdx]);
      stringIdx++;

  }
  if(stringIdx < bigString.length){
      finalString.push(bigString.slice(stringIdx))
  }
  else if(locationIdx < locations.length){
      finalString.push('_')
  }
  return finalString.join('');
}

