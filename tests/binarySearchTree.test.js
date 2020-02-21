const { BinarySearchTree, Node } = require('../js/binarySearchTree');

let bst = new BinarySearchTree;
bst.insert(5);
bst.insert(6);
bst.insert(3);
bst.insert(1);
bst.insert(10);
bst.insert(3);
bst.insert(3);
bst.insert(4);
bst.insert(11);
let root = bst.getRootNode();

test('returns 1', () => {
    expect(bst.findMinNode(root).data).toEqual(1);
});

test('node is in bst, therefore, returns 10', () => {
    expect(bst.search(root, 10).data).toEqual(10);
});

test('node is not in bst, therefore, returns null', () => {
    expect(bst.search(root, 9)).toEqual(null);
});

test('We are removing node with value 11', () => {
    expect(bst.search(root, 11).data).toEqual(11);
    bst.remove(11);
    expect(bst.search(root, 11)).toEqual(null);
});
