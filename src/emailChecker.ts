function isValidEmail(string : string){
    for(let i = 0; i < string.length; i++){
        if(string[i] === '@'){
            return true;
        }
    }
    return false;
}

export default isValidEmail;