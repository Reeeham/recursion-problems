function reverseString(input) {

    if(input.length == 0 ) 
      return '';

    return reverseString(input.substring(1)) + input[0];
}


console.log(reverseString("reham"));