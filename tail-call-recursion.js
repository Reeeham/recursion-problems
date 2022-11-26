const size = ([x, ...xs], count = 0) => {
    return x === undefined  ? count : 1 + size(xs, count + 1);
}

console.log(size([1, 2 , 3]));


//stack 
//size([1, 2, 3]) : 3
// 1 + size([2, 3]) : 1 + 2
// 1 + size([3]) : 1 + 1
// 1 + size([]) : 1 + 0

//stack 
//size([1, 2, 3], 0) 
// size([2, 3], 1) 
// size([3], 2) 
// size([], 3) : 3