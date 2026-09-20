function bubbleSortDesc(arr){
   for(let i=0;i<arr.length;i++){
    
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
   }
       return arr;
}

console.log(bubbleSortDesc([4,9,5,2,3,7,8]));