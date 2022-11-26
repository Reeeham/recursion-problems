function fibonacci(input) {  // divide and conquer can be optimized using memoization
    if(input == 0 || input == 1){
        return input;
    }else{
        return fibonacci(input - 1) + fibonacci(input - 2); 
    }

}

console.log(fibonacci(5));