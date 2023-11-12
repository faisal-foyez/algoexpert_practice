function oneEdit(stringOne, stringTwo){
    const lengthOne = stringOne.length;
    const lengthTwo = stringTwo.length;

    if(Math.abs(lengthOne - lengthTwo) > 1) return false;

    for(let i=0; i<Math.min(lengthOne, lengthTwo); i++){
        if(stringOne[i] !== stringTwo[i]){
            if(lengthOne > lengthTwo){
                return stringOne.slice(i+1) === stringTwo.slice(i);
            }else if(stringOne.length < stringTwo.length){
                return stringTwo.slice(i+1) === stringOne.slice(i);
            }else{
                return stringTwo.slice(i+1) === stringOne.slice(i+1)
            }
        }
    }

    return true;
}

function oneEdit(stringOne, stringTwo){
    const lengthOne = stringOne.length;
    const lengthTwo = stringTwo.length;

    if(Math.abs(lengthOne - lengthTwo) > 1) return false;

    let count = 0;

    let indexOne=0,indexTwo=0
    while(indexOne < lengthOne && indexTwo < lengthTwo){
        if(count > 1) return false;

        if(stringOne[indexOne] !== stringTwo[indexTwo]){
            count++;

            if(lengthOne > lengthTwo){
                indexOne++;
            }
            
            else if(stringOne.length < stringTwo.length){
                indexTwo++
            }
            
            else{
                indexOne++;
                indexTwo++
            }
        }
        else{
            indexOne++;
            indexTwo++;
        }
    }

    return true;
}

console.log(oneEdit('hollo','hello'));

