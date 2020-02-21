class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        //First we transform our data into a new node
        var newNode = new Node(data);

        // If root is null, this is a new BST, 
        // so let's plant the tree!
        if (this.root === null) {
            this.root = newNode;
        }
        // Otherwise, it's not the root,
        // so we add a leaf instead.
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {

        // We'll check left first, if the new node data
        // is than current node, we move left in the tree
        if (newNode.data < node.data) {

            // Then, if that node is null, here is where
            // we insert our node!
            if (node.left === null) {
                node.left = newNode;
            }
            // Otherwise, we have not arrived yet, we'll
            // recursively call insertNode again until we
            // we reach our null value
            else {
                this.insertNode(node.left, newNode);
            }
        }
        // We could implement a version where we add a count
        // to the nodes and count up duplicates, but for not
        // I'm just going to ignore them and return out
        else if (newNode.data === node.data){
            return;
        }

        // Now it's the reverse of what we just did, but
        // checking if the value is greater 
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {

                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }


    removeNode(node, data) {

        // If node is null, then it there's nothing to remove
        if (node === null) {
            return null;
        }

        //else we'll traverse left until we find it.
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data)
            return node;
        }

        //Same things with the right.
        else if (data > node.data) {
            node.right = this.removeNode(node.right, data)
            return node;
        }

        // Now that we've found our node, we need to think about
        // the children. Oh, won't somebody please think about
        // the children!
        else {
            
            // If they're both empty, than nothing to worry about
            if (node.left === null && node.right === null) {
                return null;
            }

            // Since we already established that node.right is not null
            // if node.left is
            if (node.left === null) {
                node = node.right;
                return node;
            }

            //therefore inversely if node.right is null, then node.left is not
            else if (node.right === null) {
                node = node.left;
                return node;
            }
        }

    }

    getRootNode() {
        return this.root;
    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    findMinNode(node) {
        // If the left node isn't null,
        // then we keep heading left until it is!
        if (node.left === null) {
            return node;
        }
        else {
            return this.findMinNode(node.left);
        }
    }

    search(node, data) {
        // If the tree is empty, return null 
        if (node === null){
            return null;
        }

        // Else we'll recursively search left
        else if (data < node.data){
            return this.search(node.left, data);
        }

        // Else we'll recursively right left
        else if (data > node.data){
            return this.search(node.right, data);
        }

        // Otherwise, we've found our node!
        else {
            return node;
        }
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }


}

module.exports = {
    BinarySearchTree,
    Node
}