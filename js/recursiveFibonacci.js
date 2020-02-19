

const recursiveFibonacci = function (num, fib_cache) {

    // Another option includes abs value of num
    if (!Number.isInteger(num) || num <= 0) {
        return -1;
    }

    fib_cache = fib_cache || {};

    if (fib_cache[num]) {
        return fib_cache[num];
    }

    if (num <= 2) {
        value = 1;
    }
    else {
        value = recursiveFibonacci(num - 1, fib_cache) + recursiveFibonacci(num - 2, fib_cache)
    }
    fib_cache[num] = BigInt(value);
    return BigInt(value);
}

module.exports = {
    recursiveFibonacci,
}