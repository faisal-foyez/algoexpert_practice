

function validIP(string){
    let result = [];

    for(let i=1; i < Math.min(string.length,4); i++){
        let ipAddress = ['', '', '', ''];
        ipAddress[0] = string.slice(0,i)
        if(!isValidIp(ipAddress[0])) continue;
        
        for(let j=i+1; j < i + Math.min(string.length - i, 4); j++){
            ipAddress[1] = string.slice(i,j);
            if(!isValidIp(ipAddress[1])) continue;

            for(let k=j+1; k < j + Math.min(string.length -j,4); k++){
                ipAddress[2] = string.slice(j,k);
                ipAddress[3] = string.slice(k);

                if(isValidIp(ipAddress[2]) && isValidIp(ipAddress[3])){
                    result.push(ipAddress.join('.'))
                    //console.log(ipAddress.join('.'));
                }
            }
        }
    }
    return result;
}

function isValidIp(str){
    const stringNumber = Number(str);
    if(stringNumber > 255) return false;

    return str.length === stringNumber.toString().length; // Check for leading 0
}

console.log(validIP('1921680'))