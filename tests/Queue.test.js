const { Queue } = require('../js/Queue');

let queue = new Queue;

test('Queue is empty', () => {
    expect(queue.isEmpty()).toEqual(true);
});


test('Queue is not empty', () => {
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);
    queue.enqueue(26);
    expect(queue.isEmpty()).toEqual(false);
});

test('Queue to return array of inserted values [5, 10, 15, 20, 26]', () => {
    expect(queue.fullQueue()).toEqual([5, 10, 15, 20, 26]);
});


test('Queue to remove first value', () => {
    queue.dequeue();
    expect(queue.fullQueue()).toEqual([10, 15, 20, 26]);
});

test('Front of queue should now return 10', () => {
    expect(queue.front()).toEqual(10);
});

