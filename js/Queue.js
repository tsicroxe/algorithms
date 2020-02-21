class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is Empty';
        }
        return this.items.shift();
    }

    front() {
        if(this.isEmpty()) {
            return 'Queue is Empty';
        }
        return this.items[0];
    }

    fullQueue() {
        if(this.isEmpty()){
            return 'Queue is empty';
        }
        return this.items;
    }

}

module.exports = {
    Queue
}