class Queue{
    constructor(){
     this.items=[];
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        return this.items.shift();
    }

    display(){
        
        console.log(this.items);
    }
}

let queue=new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

while(queue.items.length>0){
    console.log("Removed:",queue.dequeue());
}

queue.display();



