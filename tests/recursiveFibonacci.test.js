const { recursiveFibonacci } = require('../js/recursiveFibonacci');

test('returns 1n', () => {
    expect(recursiveFibonacci(1)).toEqual(1n);
});

test('returns 1n', () => {
    expect(recursiveFibonacci(2)).toEqual(1n);
});

test('returns 2n', () => {
    expect(recursiveFibonacci(3)).toEqual(2n);
});

test('returns 3n', () => {
    expect(recursiveFibonacci(4)).toEqual(3n);
});

test('returns 8n', () => {
    expect(recursiveFibonacci(6)).toEqual(8n);
});

test('returns 354224848179261915075n', () => {
    expect(recursiveFibonacci(100)).toEqual(354224848179261915075n);
})

test('returns -1', () => {
    expect(recursiveFibonacci('Bob Barker')).toEqual(-1);
});

test('returns -1', () => {
    expect(recursiveFibonacci('-5')).toEqual(-1);
});

