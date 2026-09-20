class Node{
  constructor(data){
    this.data=data;
    this.next=null;
  }
}

class Stack{
  constructor(size){
   this.top=null;
  }
  
  push(value){
    let newNode=new Node(value);

    newNode.next=this.top;
    this.top=newNode;
  }

  pop(){
    let value=this.top.data;
    this.top=this.top.next;
    return value;
  }

  peek(){
    return this.top.data;
  }

  display(){
    let current=this.top;

    while(current!==null){
      console.log(current.data);
      current=current.next;
    }
  }
}

let stack=new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.display();