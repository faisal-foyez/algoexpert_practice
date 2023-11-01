function generateSubstrings(inputString) {
    const substrings = [];
    
    for (let i = 0; i < inputString.length; i++) {
      for (let j = i + 1; j <= inputString.length; j++) {
        const substring = inputString.slice(i, j);
        substrings.push(substring);
      }
    }
  
    return substrings;
  }
  
  const inputString = "abcdef";
  const substrings = generateSubstrings(inputString);
  
  console.log(substrings);