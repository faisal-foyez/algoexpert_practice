function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a,b) => a - b);
  blueShirtHeights.sort((a,b) => a - b);

  const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';

  for(let idx = 0; idx < redShirtHeights.length; idx++){
    const redShirtHeight = redShirtHeights[idx];
    const blueShirtHeight = blueShirtHeights[idx];

    if(shirtColorInFirstRow === 'RED'){
      if(redShirtHeight >= blueShirtHeight) return false;
    }else if(blueShirtHeight >= redShirtHeight) return false;
  }
  return true;
}