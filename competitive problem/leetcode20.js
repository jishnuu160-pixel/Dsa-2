var isValid = function(s) {
    let stack=[];

    for(let i=0;i<s.length;i++){
        let char=s[i];

        if(char ==='(' || char === '[' || char === '{'){
            stack.push(s[i]);
        }else{
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
  return stack.length===0;
};

