class Stack {
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item)
    }

    pop(item){
        if(this.isEmpty()){
            return 'Stack is Empty'; 
        }
        this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        return this.items[this.items.length -1]
    }
    
    fullStack() {
        if(this.isEmpty()){
            return 'Stack is Empty';
        }
        return this.items;
    }

}

module.exports = {
    Stack
}