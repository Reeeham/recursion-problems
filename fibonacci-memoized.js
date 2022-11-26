const memoizeFib = (n) => {
    const cache = {}
    return fib(cache, n);
}
const fib = (cache, n) => {
    if(n in cache) return cache[n];
    if(n < 2) return 1;
    return cache[n] = fib(cache,n-2) + fib(cache, n-1);
}

console.log(memoizeFib(90));
