class Stack{
  constructor(size){
    this.stack=new Array(size);
    this.top=-1;
    this.size=size;
  }

  push(value){
      if(this.isFull()){
        console.log("Stack is full");
        return;
      }
    
    this.top++;
    this.stack[this.top]=value;
  }

  pop(){
    if(this.isEmpty()){
      console.log("Stack is empty");
    }
    
   let value= this.stack[this.top];
   this.top--;
    return value;
  }
  
  isEmpty(){
    return this.top===-1;
  }

  isFull(){
    return this.top===this.size-1;
  }

  isDisplay(){
    for(let i=0;i<=this.top;i++){
      console.log(this.stack[i]);
    }
  }
}

const stack1=new Stack(3);
stack1.push(10);
stack1.push(20);

stack1.pop();

console.log(stack1.isEmpty());
console.log(stack1.isFull());
stack1.isDisplay();