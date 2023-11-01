
function smallestSubstringContaining(bigString, smallString){
    const targetCharCounts = getTargetStringCharCounts(smallString);
    const smallestSubstringRange = getSmallestSubstringRange(
                                                bigString, 
                                                targetCharCounts
                                                );
    return getSubstringFromRange(bigString, smallestSubstringRange);
}

function getSmallestSubstringRange(bigString, targetCharCounts){
    let left =0;
    let right =0;
    let substringCharCount = {};
    let numUniqueChars = 0;
    let numTargetChars = Object.keys(targetCharCounts).length;
    let smallestSubstringRange = [0,Infinity];
    while (right < bigString.length){
        let rightChar = bigString[right];

        if(!(rightChar in targetCharCounts)){
            right++;
            continue;
        }
        
        increaseCharCount(rightChar, substringCharCount);
        if(substringCharCount[rightChar] === targetCharCounts[rightChar]){
            numUniqueChars += 1;
        }
        while(numUniqueChars === numTargetChars && left <= right){
            smallestSubstringRange = getSmallestRange(smallestSubstringRange[0], smallestSubstringRange[1], left, right)

            let leftChar = bigString[left];
            if(!(leftChar in targetCharCounts)){
                left++;
                continue;
            }

            if(substringCharCount[leftChar] === targetCharCounts[leftChar]){
                numUniqueChars -= 1;
            }
            decreaseCharCount(leftChar, substringCharCount);
            left++;
        }
        right++;
    }
    return smallestSubstringRange;
}

function getSmallestRange(idx1, idx2, idx3, idx4){
    return idx2 - idx1 < idx4 - idx3 ? [idx1, idx2] : [idx3, idx4]
}
function increaseCharCount(currentChar, substringCharCount){
    substringCharCount[currentChar] = 
    (substringCharCount[currentChar] || 0) + 1;
}
function decreaseCharCount(currentChar, substringCharCount){
    substringCharCount[currentChar] = 
    (substringCharCount[currentChar] || 0) - 1;
}
function getTargetStringCharCounts(string){
    const targetCharCounts = {}; 
    for(let char of string){
        targetCharCounts[char] = 
        (targetCharCounts[char] || 0) + 1;
    }
    return targetCharCounts;
}
function getSubstringFromRange(string, range){
    let [start, end] = range;
    if(end === Infinity) return '';
    return string.slice(start,end+1);
}

console.log(smallestSubstringContaining('abcd$ef$abx$cd','$$abf'));