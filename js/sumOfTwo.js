// You have two integer arrays, a and b, and an integer target value v.
// Determine whether there is a pair of numbers, where one number is taken
// from a and the other from b, that can be added together to get a sume of v.
// Return true if such a pair exists, otherwise, return false.

const sumOfTwo = function (a, b, v) {
    let differences = [];
    for (index in a) {
        let difference = v - a[index]
        differences.push(difference)
    }
    for (index in b) {
        if (differences.includes(b[index])) { return true }
    }
    return false;
}

module.exports = {
    sumOfTwo
}