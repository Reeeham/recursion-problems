function recursiveSummation(input) {
    if(input <= 1) 
        return input;

    return input + recursiveSummation(input - 1);
    
}

console.log(recursiveSummation(10));