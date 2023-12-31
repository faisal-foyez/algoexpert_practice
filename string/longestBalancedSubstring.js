
// //time O(n^3) | space O(n)
// function longestBalancedSubstring(string){
//     let substring;
//     let maxLength = 0;

//     for(let i=0; i < string.length; i++){
        
//         for(let j=i+2; j <= string.length; j+=2){
//             substring = string.slice(i,j);

//             if(isBalanced(substring)){
//                 if(maxLength < substring.length){
//                     maxLength = substring.length;
//                 }
//             }
//         }
//     }
//     return maxLength;
// }

// function isBalanced(substring){
//     const stack = [];

//     for(let char of substring){
//         if(char === '('){
//             stack.push('(')
//         }else if(char === ')' && stack.length){
//             stack.pop();
//         }else{
//             return false;
//         }
//     }

//     return stack.length === 0;
// }

// Time O(n) | Space O(n)
// function longestBalancedSubstring(string){
//     let stack = [-1];
//     let maxLength = 0;
//     for(let i=0; i < string.length; i++){
//         let char = string[i];
        
//         if(char === '('){
//             stack.push(i);
//         }

//         else if(char === ')'){

//            //If the stack is already empty then push the current index and continue;
//             if(!stack.length){
//                 stack.push(i);
//                 continue;
//             }
            
//             stack.pop();

//             //If the stack is not empty even after pop operation then calcualte maxLength
//             if(stack.length){
//                 let currentLength = i - stack[stack.length-1];
//                 maxLength = maxLength < currentLength ? currentLength : maxLength;
//             }

//             //If after the pop operation the stack is empty then push the current index.
//             else{
//                 stack.push(i)
//             }
//         }
//     }
//     return maxLength
// }

// time O(n) | space(1)
function longestBalancedSubstring(string){
    let maxLength=0;
  
    let openingCount = 0; 
    let closingCount = 0; 

    //Traverse left to right
    for(const char of string){
      if(char === '('){
        openingCount++;
      }else{
        closingCount++;
      }
  
      if(openingCount === closingCount){
        maxLength = Math.max(maxLength, closingCount * 2);
      }else if(closingCount > openingCount){
        openingCount = 0;
        closingCount = 0;
      }
    }

    openingCount = 0;
    closingCount = 0;
    //Traverse right to left;
    for(let i = string.length - 1; i >= 0; i--){
      const char = string[i];
      if(char === '('){
        openingCount++;
      }else{
        closingCount++;
      }
  
      if(openingCount === closingCount){
        maxLength = Math.max(maxLength, openingCount * 2);
      }else if(openingCount > closingCount){
        openingCount = 0;
        closingCount = 0;
      }
    }
  
    return maxLength;
  }
  