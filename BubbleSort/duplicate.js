function bubbleSort(arr){
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

console.log(bubbleSort([4,5,1,5,2,3,2,7,8]));