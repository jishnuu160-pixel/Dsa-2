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


function isBalanced(str){
      let stack=new Stack();
    for(let i=0;i<str.length;i++){
     let char=str[i];

        if(
            (char ==='(' || char === '{' || char === '[')
        ){
           stack.push(char);
        }else if(char === ')' || char === '}' || char === ']'){
            let open=stack.pop();

            if(
                (char === ')' && open!=='(')||
                (char === '}' && open!=='{')||
                (char === ']' && open!=='[')
            ){
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(isBalanced("({[]})"));
console.log(isBalanced("({[}])"));