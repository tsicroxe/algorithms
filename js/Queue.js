class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        if (this.items.length > 0) {
            return false;
        }
        return true;
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is Empty';
        }
        this.items.shift();
    }

    front() {
        return this.items[0];
    }

    fullQueue() {
        return this.items;
    }

}

module.exports = {
    Queue
}