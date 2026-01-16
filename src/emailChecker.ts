function isValidEmail(string : string){
    if(!string.includes("@")){
        return false;
    }

    if(!string.includes('.') || string.endsWith(".")){
        return false;
    }

    if(string.includes(' ')){
        return false;
    }

    if(string.startsWith("@") || string.endsWith("@")){
        return false;
    }

    return true;
}

export default isValidEmail;