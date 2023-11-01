// function reverseStringWord(string){
//     let arr = [];
//     let startOfWord = 0;

//     for(let idx=1; idx < string.length; idx++){
//         let char = string[idx];
//         if(char === ' '){
//             arr.push(string.slice(startOfWord,idx))
//             startOfWord = idx;
//         }else if(string[startOfWord] === ' '){
//             arr.push(' ');
//             startOfWord = idx;
//         }
//     }
//     arr.push(string.slice(startOfWord,string.length))

//     return reverseString(arr,0,arr.length-1).join(',')
// }

// function reverseString(arr, start, end){
//     while(start <= end){
//         [arr[start],arr[end]] = [arr[end], arr[start]]
//         start += 1;
//         end -= 1
//     }
//     return arr;
// }


function reverseStringWord(string){
    let startOfWord = 0;
    let stringArr = [];
    let arr = [];
    for(let i=0; i<string.length; i++){
        stringArr.push(string[i]);
    }
    const reversedString = reverseString(stringArr);

    for(let idx=1; idx < reversedString.length; idx++){
        let char = reversedString[idx];
        if(char === ' '){
            arr.push(reverseString(reversedString.slice(startOfWord,idx)).join(''))
            startOfWord = idx;
        }else if(reversedString[startOfWord] === ' '){
            arr.push(' ');
            startOfWord = idx;
        }
    }
    arr.push(reverseString(reversedString.slice(startOfWord,reversedString.length)).join(''))
    return arr.join('')
}

function reverseString(stringArr){
    let start = 0;
    let end = stringArr.length-1;
    while(start <= end){
        [stringArr[start],stringArr[end]] = [stringArr[end], stringArr[start]]
        start += 1;
        end -= 1
    }
    return stringArr;
}
console.log(reverseStringWord('AlgoExpert is the best!'))
console.log(reverseStringWord('    a  b '))

