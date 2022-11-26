function isPalinndrome(input) {
    if(input.length == 0 || input.length == 1) {
        return true;
    }

    if(input[0] == input[input.length - 1]) {
        return isPalinndrome(input.substring(1, input.length - 1));
    }

    return false;
}

console.log(isPalinndrome("racecar"));