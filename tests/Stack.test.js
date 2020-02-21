const { Stack } = require('../js/Stack');

let stack = new Stack;

test('Stack is empty', () => {
    expect(stack.isEmpty()).toEqual(true);
});

test('Stack is not empty', () => {
    stack.push(1);
    stack.push(20);
    stack.push(2);
    stack.push(235);
    stack.push(52);
    stack.push(7);

    expect(stack.isEmpty()).toEqual(false);
});

test('Stack to return array of inserted values [5, 10, 15, 20, 26]', () => {
    expect(stack.fullStack()).toEqual([1, 20, 2, 235, 52, 7]);
});


test('Stack to remove last value', () => {
    stack.pop();
    expect(stack.fullStack()).toEqual([1, 20, 2, 235, 52]);
});

test('Next value in stack should be 235', () => {
    expect(stack.peek()).toEqual(52);
});

test('Make sure that popping more than possible does not break stack', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.fullStack()).toEqual('Stack is Empty');
})