class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }

    enqueue(value){
       let newNode=new Node(value);

       if(this.rear===null){
          this.front=newNode;
          this.rear=newNode;
       }else{
        this.rear.next=newNode;
        this.rear=newNode;
       }
    }

    dequeue(){
        if(this.front===null){
            return null;
        }

        let value=this.front.data;
        this.front=this.front.next;

        if(this.front===null){
           this.rear=null;
        }
        return value;
    }

    display(){
        let current=this.front;

        while(current!==null){
            console.log(current.data);
            current=current.next;
        }
    }
}

let queue=new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);


queue.display();
