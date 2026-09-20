class Stack{
    constructor(){
       this.items=[];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length===0;
    }
}

function reverseString(str){
    let stack=new Stack();

    for(let i=0;i<str.length;i++){
        stack.push(str[i]);
    }

    let reversed="";

    while(!stack.isEmpty()){
        reversed+=stack.pop();
    }
    return reversed;
}

console.log(reverseString("hello"));