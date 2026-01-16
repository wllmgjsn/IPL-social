function isValidEmail(string : string){
    if(!string.includes("@")){
        return false;
    }

    if(string.endsWith(".")){
        return false;
    }

    return true;
}

export default isValidEmail;