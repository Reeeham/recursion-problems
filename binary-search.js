function binarySearch(arr, left, right, value) { //sorted array
    if(left > right) {
        return -1;
    }
    let mid = parseInt((left + right) / 2);

    if(arr[mid] === value) {
        return mid;

    }

    if(value < arr[mid]) {
        return binarySearch(arr, left, mid - 1, value);

    }
    
    return binarySearch(arr, mid+1, right, value);

}
const arr = [1,2,3,4,5,6,7,8]
console.log(binarySearch(arr, 0, arr.length - 1, 2)); // 1