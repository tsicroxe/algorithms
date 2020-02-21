const { LinkedList } = require('../js/LinkedList');

let list = new LinkedList;

list.append(4)
list.append(7)
list.append(33)
list.append(1)

let headNode = list.headNode()

test('List size is 4', () => {
    expect(list.length()).toEqual(4);
});

test('First value should become 17', () => {
    expect(list.prepend(17))
});

test('List size should now be 5', () => {
    expect(list.length()).toEqual(5);
});

test('Index of 33 should be 3', () => {
    expect(list.indexOf(33)).toEqual(3);
})

test('A value of 25 (not in list) should return  -1', () => {
    expect(list.indexOf(25)).toEqual(-1);
})

test('inserting 19 at index 2 should be between 7 and 33', () => {
    list.insertAt(19, 2);
    expect(list.indexOf(19)).toEqual(2);
})

test('inserting beyond the scope of the list should return -1', () => {
    expect(list.insertAt(155, 10)).toEqual(-1);
})


test('Removing at the index should remove it from the list and return the value', () => {
    expect(list.removeAt(2)).toEqual(19);
})



test('Removing 33 at index 3 should make the new index return 1', () => {
    list.removeValue(33);
    expect(list.indexOf(33)).toEqual(-1);
})

