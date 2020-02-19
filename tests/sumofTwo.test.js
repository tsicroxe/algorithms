const { sumOfTwo } = require('../js/sumOfTwo');

test('expects to return true', () => {
    expect(sumOfTwo([5, 10, 22, -5, 1], [1, 4, -336, 355, 22], 27)).toEqual(true);
});

test('expects to return false', () => {
    expect(sumOfTwo([5, 10, 12, -5, 1], [1, 4, -336, 355, 22], 5000)).toEqual(false);
});

