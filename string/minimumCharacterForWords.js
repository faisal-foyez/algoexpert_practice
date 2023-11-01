

function minimumCharacters(words){

    const max_freq = {};

    for(let word of words){
        const count_map = {};
        for(let char of word){
            count_map[char] = (count_map[char] || 0) + 1;
        }

        for(let key in count_map){
            if(!max_freq[key] || max_freq[key] < count_map[key]){
                max_freq[key] = count_map[key]
            }
        }
    }

    let result =[];

    for(let key in max_freq){
        result.push(...new Array(max_freq[key]).fill(key))
    }

    return result;
}

console.log(minimumCharacters(['this','that','did','deed','them!','a']))