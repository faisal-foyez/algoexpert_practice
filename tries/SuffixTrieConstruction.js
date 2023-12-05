class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // Write your code here.
    for(let idx = 0; idx < string.length; idx++){
      this.insertSubstringStartingAt(idx, string);
    }
  }

  insertSubstringStartingAt(idx, string){
    let current = this.root;
    for(let i = idx; i < string.length; i++){
      let letter = string[i];
      if(!(letter in current)){
        current[letter] = {};
      }
      current = current[letter];
    }
    current[this.endSymbol] = true;
  }

  contains(string) {
    // Write your code here.
    let current = this.root;
    for(let i = 0 ; i < string.length; i++){
      let letter = string[i];
      if(!(letter in current)) return false;
      current = current[letter]
    }
    return this.endSymbol in current;
  }
}