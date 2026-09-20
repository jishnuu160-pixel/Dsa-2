class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;

        this.front = -1;
        this.rear = -1;
    }

    enqueue(value) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is full");
            return;
        }

        if (this.front===-1) {
            this.front=0;
            this.rear=0;
        } else {
            this.rear=(this.rear + 1)%this.size;
        }

        this.queue[this.rear]=value;
    }

    dequeue() {
        if (this.front === -1) {
            console.log("Queue is empty");
            return;
        }

        let value= this.queue[this.front];

        if (this.front === this.rear) {
            this.front =-1;
            this.rear =-1;
        } else {
            this.front=(this.front + 1) % this.size;
        }
        return value;
    }

    display(){
        if (this.front === -1) {
            console.log("Queue is empty");
            return;
        }

        let i=this.front;

        while(true){
            console.log(this.queue[i]);

            if (i===this.rear) {
                break;
            }
            i=(i+1)%this.size;
        }
    }
}

let q = new CircularQueue(5);

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

q.display();

console.log("Removed:", q.dequeue());
console.log("Removed:", q.dequeue());

q.enqueue(50);
q.enqueue(60);

q.display();