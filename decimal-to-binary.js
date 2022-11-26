function decimalToBinary(decimal, result) {
    if(decimal == 0)  {
        return result;
    }

    result = (decimal % 2) + result; 
    console.log(result);
    return decimalToBinary(parseInt(decimal / 2), result);
}

 
console.log(decimalToBinary(20, ''));
