function longestPalindromeSubsting(s){
    let longestPalindrome = '';

    for(let i = 0; i < s.length; i++){
        let nextCharIndex = i + 1;
        let prevCharIndex = i - 1;

        let palindrome = s[i];

        while(s[nextCharIndex] || s[prevCharIndex]){
            if(s[prevCharIndex] !== s[nextCharIndex]){
                nextCharIndex = nextCharIndex - 1;
                if(s[prevCharIndex] !== s[nextCharIndex]){
                    break;
                }else{
                    palindrome = ''
                }
            }

            palindrome = `${s[prevCharIndex]}${palindrome}${s[nextCharIndex]}`

            nextCharIndex += 1;
            prevCharIndex -= 1;

        }
        if(palindrome.length > longestPalindrome.length){
            longestPalindrome = palindrome;
        }
    }
    return longestPalindrome;
}

console.log(longestPalindromeSubsting('abaxyzzyxf'))
console.log(longestPalindromeSubsting('babad'))
console.log(longestPalindromeSubsting('cbbd'))


