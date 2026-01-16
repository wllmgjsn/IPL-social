function isValidEmail(string : string){
    if(!string.includes("@")){
        return false;
    }

    return true;
}

export default isValidEmail;