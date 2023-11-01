
function underScorifySubstring(bigString, smallString){
    const locations = collapseLocations(findLocations(bigString,smallString));
    return underScorify(bigString,locations);
}

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

function findLocations(bigString, smallString){
    let startIdx = 0;
    let locations = [];
    while(startIdx < bigString.length){
        const nextIdx = bigString.indexOf(smallString, startIdx);
        if(nextIdx !== -1){
            locations.push([nextIdx, nextIdx+smallString.length])
            startIdx = nextIdx + 1
        }
        else{
            break;
        }
    }
    return locations;
}
    
function collapseLocations(locations){
    if(!locations.length) return 

    let newLocations = [locations[0]];
    let previousLocation = newLocations[0];
    for(let i=1; i<locations.length; i++){
        currentLocation = locations[i]

        if(currentLocation[0] <= previousLocation[1]){
            previousLocation[1] = currentLocation[1]
        }else{
            newLocations.push(currentLocation);
            previousLocation = currentLocation;
        }
    }
    return newLocations;
}

console.log(underScorifySubstring('testthis is a testtest to see if testtesttest it works','test'));
